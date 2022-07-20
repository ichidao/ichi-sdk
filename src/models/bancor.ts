export type BancorV3Pool = {
  poolDltId: string; // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
  poolTokenDltId: string; // '0x256Ed1d83E3e4EfDda977389A5389C3433137DDA';
  name: string; // 'ETH';
  decimals: number; // 18;
  tradingLiquidityBNT: {
    bnt: string; // '24891584.561789286290005325';
    usd: string; // '12321334.35808569671355263587';
    eur: string; // '11773719.49772633241517251872';
    eth: string; // '11293.311915683799189775';
    tkn: string; // '24891584.561789286290005325';
  };
  tradingLiquidityTKN: {
    bnt: string; // '24891584.561789286289998085';
    usd: string; // '12321334.35808569671354905227';
    eur: string; // '11773719.49772633241516909439';
    eth: string; // '11293.311915683799189772';
    tkn: string; // '11187.084916903921102997';
  };
  volume24h: {
    bnt: string; // '2163092.236703350016563524';
    usd: string; // '1081148.43444932767995567525';
    eur: string; // '1030058.04907353710118617841';
    eth: string; // '959.043427144883713107';
    tkn: string; // '955.301180983820021876';
  };
  fees24h: {
    bnt: string; // '1565.331238949218657910';
    usd: string; // '778.50075826719663552158';
    eur: string; // '741.99687460283564755823';
    eth: string; // '0.691149621115294008';
    tkn: string; // '0.691546352148967658';
  };
  stakedBalance: {
    bnt: string; // '43660426.093698224075511339';
    usd: string; // '21769088.45031793452404995369';
    eur: string; // '20738702.39450665643586788609';
    eth: string; // '19481.282123008147582493';
    tkn: string; // '19450.203214704613595376';
  };
  standardRewardsClaimed24h: {
    bnt: string; // '170.272157226365431241';
    usd: string; // '84.51615591813912284450';
    eur: string; // '80.80271224398557858376';
    eth: string; // '0.075972295196738972';
    tkn: string; // '170.272157226365431241';
  };
  standardRewardsProviderJoined: {
    bnt: string; // '52093784.696136555682462705';
    usd: string; // '73603036.88202028265937533185';
    eur: string; // '70305145.21545794550732545647';
    eth: string; // '36312.236835690057322050';
    tkn: string; // '36383.398959719737301820';
  };
  standardRewardsProviderLeft: {
    bnt: string; // '51462131.935901611274573191';
    usd: string; // '44301323.45532493889281284378';
    eur: string; // '42158725.16214987217142449396';
    eth: string; // '31474.247897793025387292';
    tkn: string; // '31484.540716050833045224';
  };
  standardRewardsStaked: {
    bnt: string; // '700502.044359354954473420';
    usd: string; // '28271811.45451938860860871861';
    eur: string; // '27209995.81280050437974404330';
    eth: string; // '4842.077011320644373558';
    tkn: string; // '4898.135312202290546404';
  };
  liquidity: {
    bnt: string; // '25001414.282962996663375806';
    usd: string; // '12465705.16148535013635917727';
    eur: string; // '11875671.78440742341510350822';
    eth: string; // '11155.631053058089111198';
    tkn: string; // '11137.834234944327654768';
  };
  volume24hTarget: {
    bnt: string; // '781613.631881451742539619';
    usd: string; // '388726.18395344952462512439';
    eur: string; // '370498.58850613414081871813';
    eth: string; // '345.109004493817600999';
    tkn: string; // '345.081629722334877588';
  };
  volume7d: {
    bnt: string; // '11627369.708110726605171067';
    usd: string; // '6027616.99088542933293415692';
    eur: string; // '5719932.51783973655494398045';
    eth: string; // '5136.087548898826738028';
    tkn: string; // '5142.474481291760964325';
  };
  volume7dTarget: {
    bnt: string; // '6276132.762165626806783436';
    usd: string; // '3253023.95841759189379154127';
    eur: string; // '3086464.36366722037221529537';
    eth: string; // '2762.943168589996393422';
    tkn: string; // '2771.990809508854631400';
  };
  fees7d: {
    bnt: string; // '12564.119390276850435033';
    usd: string; // '6512.17482961740812957035';
    eur: string; // '6178.74418657056692227134';
    eth: string; // '5.531085825186313078';
    tkn: string; // '5.555091802622954958';
  };
  tradingFeePPM: string; // '2000';
  tradingEnabled: boolean;
};

export type BancorV3Pools = {
  data: BancorV3Pool[];
};
