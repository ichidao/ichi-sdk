import univ3prices from '@thanpolas/univ3prices';
import { BigNumber } from 'ethers';

// calculate price/ratio in the pool
export function getPrice(
  isInverted: boolean,
  sqrtPrice: BigNumber,
  decimals0: number,
  decimals1: number,
  decimalPlaces = 3
): number {
  let decimalArray = [decimals0, decimals1];
  if (isInverted) {
    decimalArray = [decimals1, decimals0];
  }
  const price = univ3prices(decimalArray, sqrtPrice).toSignificant({
    reverse: isInverted,
    decimalPlaces: decimalPlaces
  });

  return price;
}

// calculate proposed rebalance values
// returns a string with 5 numbers separated by ","
// baseLower, baseUpper, limitLower, limitUpper, currentTick
export function getRebalanceTicks(
  isInverted: boolean,
  tickSpace: number,
  sqrtPrice: BigNumber,
  decimals0: number,
  decimals1: number
): string {
  let decimalArray = [decimals0, decimals1];
  if (isInverted) {
    decimalArray = [decimals1, decimals0];
  }
  const currentPrice = univ3prices(decimalArray, sqrtPrice).toSignificant({
    reverse: isInverted
  });
  const baseLowerPrice = Number(currentPrice) * 0.7;

  const currentTick = Number(univ3prices.tickMath.getTickAtSqrtRatio(sqrtPrice));

  const minValue = tickSpace == 60 ? -887220 : -887200;
  const maxValue = tickSpace == 60 ? 887220 : 887200;

  let suggestedTicks = '';
  let shift = 0;
  let price = currentPrice;
  if (isInverted) {
    let startTick = Math.floor(currentTick / tickSpace) * tickSpace;
    while (price > baseLowerPrice) {
      startTick = startTick - tickSpace;
      const sqrt = univ3prices.tickMath.getSqrtRatioAtTick(startTick);
      price = univ3prices(decimalArray, sqrt).toSignificant({
        reverse: isInverted
      });
    }
    if (currentTick - Math.floor(currentTick / tickSpace) * tickSpace > tickSpace * 0.8) {
      shift = 1;
    }
    suggestedTicks =
      startTick +
      ', ' +
      (Math.floor(currentTick / tickSpace) + shift) * tickSpace +
      ', ' +
      Math.ceil(currentTick / tickSpace) * tickSpace +
      ', ' +
      maxValue;
  } else {
    let startTick = Math.ceil(currentTick / tickSpace) * tickSpace;
    while (price > baseLowerPrice) {
      startTick = startTick + tickSpace;
      const sqrt = univ3prices.tickMath.getSqrtRatioAtTick(startTick);
      price = univ3prices(decimalArray, sqrt).toSignificant({
        reverse: isInverted
      });
    }
    if (Math.ceil(currentTick / tickSpace) * tickSpace - currentTick > tickSpace * 0.8) {
      shift = 1;
    }
    suggestedTicks =
      (Math.ceil(currentTick / tickSpace) - shift) * tickSpace +
      ', ' +
      startTick +
      ', ' +
      minValue +
      ', ' +
      Math.floor(currentTick / tickSpace) * tickSpace;
  }

  suggestedTicks += ', ' + currentTick;

  return suggestedTicks;
}

export function getBarShift(
  direction: boolean,
  tickSpacing: number,
  currentTick: number,
  lower: number,
  upper: number
): number {
  let bar = 0;
  if (direction) {
    bar = Math.floor((currentTick - lower) / tickSpacing);
  } else {
    bar = Math.floor((upper - currentTick) / tickSpacing);
  }
  return bar;
}
