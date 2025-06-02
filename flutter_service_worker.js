'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "98cc152b0c4413cb931a2a8df2d2d283",
"assets/AssetManifest.bin.json": "b882b039348d8e53783ca4144e389ced",
"assets/AssetManifest.json": "48207ab6b913e9a1ff4cf13697b129fc",
"assets/assets/images/black-overlay.bmp": "eedcba1c3e9e0f290a073db01b7cbf38",
"assets/assets/images/card-clean.bmp": "ae9f1ca9800926a3fb21e5651414d15b",
"assets/assets/images/card_back.bmp": "a0fdcc48ccb6961ac59bd4ab21b2eae5",
"assets/assets/images/card_back.png": "550aa5bf602d421f772b393fc51095f4",
"assets/assets/images/card_front.bmp": "be80b80871aaa673d70ca348431b4126",
"assets/assets/images/card_front.png": "5d57a8ebd5f9719fed7e0c946a736bad",
"assets/assets/images/card_front_2.bmp": "b2868aff74f6974f927d8be0a519dedd",
"assets/assets/images/card_front_2.png": "53af1f928ed677ac73ec1c2855e19298",
"assets/assets/images/logo.png": "8b42958401aaf64dd439bfd164a8e629",
"assets/assets/json/utopia_districts_central.json": "57b3880321701c86a70e85f98cbe6c82",
"assets/assets/json/utopia_districts_eastern.json": "3b21e899c233eb371067cf051061c7c2",
"assets/assets/json/utopia_districts_southern.json": "4b5ce59cab555634f0f3fa7033fa0358",
"assets/assets/json/utopia_provinces.json": "a1b5372f910e0901f20f5829de743a10",
"assets/assets/json/utopia_wards_central_district_one.json": "0c5f26823cde60a39683fa4391fa343b",
"assets/assets/json/utopia_wards_central_district_three.json": "b28a56452b0d221ef8c5a4fcd2cf1377",
"assets/assets/json/utopia_wards_central_district_two.json": "49f0779c4f1df8b63f88dd268a06c7ef",
"assets/assets/json/utopia_wards_eastern_district_one.json": "e1dbb03d7f8c4baa350911d5631d7013",
"assets/assets/json/utopia_wards_eastern_district_three.json": "a3d8150241cdc36fe882de94425b016a",
"assets/assets/json/utopia_wards_eastern_district_two.json": "d0d9af5d3307e578c54b98d959cf476c",
"assets/assets/json/utopia_wards_southern_district_four.json": "94250297fabe09c869a338c5a05f1195",
"assets/assets/json/utopia_wards_southern_district_one.json": "7a51dba1469846bb1159e195e39c8470",
"assets/assets/json/utopia_wards_southern_district_three.json": "1a7b99d7120e697b4170520bd81a3cec",
"assets/assets/json/utopia_wards_southern_district_two.json": "82462e699d506dd5ae73493e125f9d5a",
"assets/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/assets/rive/folder.riv": "11c38692fdfbe2d5b483d84e5e7117b6",
"assets/assets/rive/icons.riv": "3d29f9acebef13f01f371b59e84e664b",
"assets/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/assets/rive/loading_dots.riv": "cf751c88f9f091f29d6b1c6deb64c861",
"assets/assets/rive/loading_error_success.riv": "0cdfcbad40a9d8140d0def6dcfc5698b",
"assets/assets/rive/menu_button.riv": "f8fdfd9fd8dc7873dfac6f005f3233c1",
"assets/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/assets/rive/success.riv": "537cbb27241d7cf5d34cda16153b9d6d",
"assets/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/assets/shaders/particle_effect.glsl": "6012a27b38576ca54066bab4d668c808",
"assets/FontManifest.json": "f052490e6b5669bca76f16ae8489e008",
"assets/fonts/MaterialIcons-Regular.otf": "18aaf2187b28d9d94ac814676f7e9992",
"assets/NOTICES": "5f87aec007d1414df2261638e599afe0",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_plus_plus/assets/fonts/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/packages/flutter_plus_plus/assets/fonts/Lato-Italic.ttf": "e0867c8fb91d45453b9d3a578b66dca8",
"assets/packages/flutter_plus_plus/assets/fonts/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/packages/flutter_plus_plus/assets/fonts/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/packages/flutter_plus_plus/assets/fonts/OpenSans-Italic.ttf": "c7dcce084c445260a266f92db56f5517",
"assets/packages/flutter_plus_plus/assets/fonts/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/packages/flutter_plus_plus/assets/fonts/Raleway-Bold.ttf": "575e4317521b381ac94c0c8207c81979",
"assets/packages/flutter_plus_plus/assets/fonts/Raleway-Italic.ttf": "dd03a26a6d06f63d75ceeac6b491f26a",
"assets/packages/flutter_plus_plus/assets/fonts/Raleway-Regular.ttf": "580d0778ad254335be45bf58bb449f43",
"assets/packages/flutter_plus_plus/assets/fonts/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/packages/flutter_plus_plus/assets/fonts/Roboto-Italic.ttf": "42bbe4eefcde1297b11dc4b6491e9746",
"assets/packages/flutter_plus_plus/assets/fonts/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/packages/flutter_plus_plus/assets/images/facial_outline.png": "65dca8c26fa7b6b27920c4914ab9c878",
"assets/packages/flutter_plus_plus/assets/images/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/packages/flutter_plus_plus/assets/images/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/packages/flutter_plus_plus/assets/images/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/packages/flutter_plus_plus/assets/images/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/packages/flutter_plus_plus/assets/images/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/packages/flutter_plus_plus/assets/images/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/packages/flutter_plus_plus/assets/images/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/packages/flutter_plus_plus/assets/images/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/packages/flutter_plus_plus/assets/images/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/packages/flutter_plus_plus/assets/images/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/packages/flutter_plus_plus/assets/images/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/packages/flutter_plus_plus/assets/images/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/packages/flutter_plus_plus/assets/images/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/packages/flutter_plus_plus/assets/images/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/flutter_plus_plus/assets/images/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/packages/flutter_plus_plus/assets/images/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/packages/flutter_plus_plus/assets/images/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/packages/flutter_plus_plus/assets/images/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/packages/flutter_plus_plus/assets/images/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/packages/flutter_plus_plus/assets/images/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/packages/flutter_plus_plus/assets/images/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/packages/flutter_plus_plus/assets/images/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/packages/flutter_plus_plus/assets/images/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/packages/flutter_plus_plus/assets/images/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/packages/flutter_plus_plus/assets/images/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/packages/flutter_plus_plus/assets/images/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/packages/flutter_plus_plus/assets/images/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/packages/flutter_plus_plus/assets/images/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/packages/flutter_plus_plus/assets/images/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/packages/flutter_plus_plus/assets/images/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/packages/flutter_plus_plus/assets/images/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/flutter_plus_plus/assets/images/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/packages/flutter_plus_plus/assets/images/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/packages/flutter_plus_plus/assets/images/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/packages/flutter_plus_plus/assets/images/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/flutter_plus_plus/assets/images/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/packages/flutter_plus_plus/assets/images/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/packages/flutter_plus_plus/assets/images/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/packages/flutter_plus_plus/assets/images/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/packages/flutter_plus_plus/assets/images/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/packages/flutter_plus_plus/assets/images/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/packages/flutter_plus_plus/assets/images/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/packages/flutter_plus_plus/assets/images/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/packages/flutter_plus_plus/assets/images/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/packages/flutter_plus_plus/assets/images/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/packages/flutter_plus_plus/assets/images/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/packages/flutter_plus_plus/assets/images/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/flutter_plus_plus/assets/images/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/packages/flutter_plus_plus/assets/images/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/packages/flutter_plus_plus/assets/images/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/packages/flutter_plus_plus/assets/images/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/packages/flutter_plus_plus/assets/images/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/packages/flutter_plus_plus/assets/images/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/packages/flutter_plus_plus/assets/images/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/packages/flutter_plus_plus/assets/images/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/packages/flutter_plus_plus/assets/images/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/packages/flutter_plus_plus/assets/images/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/packages/flutter_plus_plus/assets/images/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/packages/flutter_plus_plus/assets/images/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/packages/flutter_plus_plus/assets/images/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/packages/flutter_plus_plus/assets/images/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/packages/flutter_plus_plus/assets/images/flags/do.png": "ed35983a9263bb5713be37d9a52caddc",
"assets/packages/flutter_plus_plus/assets/images/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/packages/flutter_plus_plus/assets/images/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/packages/flutter_plus_plus/assets/images/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/packages/flutter_plus_plus/assets/images/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/packages/flutter_plus_plus/assets/images/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/packages/flutter_plus_plus/assets/images/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/packages/flutter_plus_plus/assets/images/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/packages/flutter_plus_plus/assets/images/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/packages/flutter_plus_plus/assets/images/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/packages/flutter_plus_plus/assets/images/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/flutter_plus_plus/assets/images/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/packages/flutter_plus_plus/assets/images/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/packages/flutter_plus_plus/assets/images/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/packages/flutter_plus_plus/assets/images/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/packages/flutter_plus_plus/assets/images/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/packages/flutter_plus_plus/assets/images/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/flutter_plus_plus/assets/images/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/flutter_plus_plus/assets/images/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/packages/flutter_plus_plus/assets/images/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/packages/flutter_plus_plus/assets/images/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/flutter_plus_plus/assets/images/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/packages/flutter_plus_plus/assets/images/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/packages/flutter_plus_plus/assets/images/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/packages/flutter_plus_plus/assets/images/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/flutter_plus_plus/assets/images/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/packages/flutter_plus_plus/assets/images/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/packages/flutter_plus_plus/assets/images/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/packages/flutter_plus_plus/assets/images/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/packages/flutter_plus_plus/assets/images/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/packages/flutter_plus_plus/assets/images/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/packages/flutter_plus_plus/assets/images/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/packages/flutter_plus_plus/assets/images/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/packages/flutter_plus_plus/assets/images/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/packages/flutter_plus_plus/assets/images/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/packages/flutter_plus_plus/assets/images/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/packages/flutter_plus_plus/assets/images/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/packages/flutter_plus_plus/assets/images/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/flutter_plus_plus/assets/images/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/packages/flutter_plus_plus/assets/images/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/packages/flutter_plus_plus/assets/images/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/packages/flutter_plus_plus/assets/images/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/packages/flutter_plus_plus/assets/images/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/flutter_plus_plus/assets/images/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/flutter_plus_plus/assets/images/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/packages/flutter_plus_plus/assets/images/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/packages/flutter_plus_plus/assets/images/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/packages/flutter_plus_plus/assets/images/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/packages/flutter_plus_plus/assets/images/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/packages/flutter_plus_plus/assets/images/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/packages/flutter_plus_plus/assets/images/flags/is.png": "907840430252c431518005b562707831",
"assets/packages/flutter_plus_plus/assets/images/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/packages/flutter_plus_plus/assets/images/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/packages/flutter_plus_plus/assets/images/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/packages/flutter_plus_plus/assets/images/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/packages/flutter_plus_plus/assets/images/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/packages/flutter_plus_plus/assets/images/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/packages/flutter_plus_plus/assets/images/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/packages/flutter_plus_plus/assets/images/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/packages/flutter_plus_plus/assets/images/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/packages/flutter_plus_plus/assets/images/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/packages/flutter_plus_plus/assets/images/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/packages/flutter_plus_plus/assets/images/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/packages/flutter_plus_plus/assets/images/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/packages/flutter_plus_plus/assets/images/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/packages/flutter_plus_plus/assets/images/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/packages/flutter_plus_plus/assets/images/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/packages/flutter_plus_plus/assets/images/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/packages/flutter_plus_plus/assets/images/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/packages/flutter_plus_plus/assets/images/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/packages/flutter_plus_plus/assets/images/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/packages/flutter_plus_plus/assets/images/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/packages/flutter_plus_plus/assets/images/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/packages/flutter_plus_plus/assets/images/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/flutter_plus_plus/assets/images/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/packages/flutter_plus_plus/assets/images/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/packages/flutter_plus_plus/assets/images/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/packages/flutter_plus_plus/assets/images/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/packages/flutter_plus_plus/assets/images/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/packages/flutter_plus_plus/assets/images/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/packages/flutter_plus_plus/assets/images/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/packages/flutter_plus_plus/assets/images/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/packages/flutter_plus_plus/assets/images/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/flutter_plus_plus/assets/images/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/packages/flutter_plus_plus/assets/images/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/packages/flutter_plus_plus/assets/images/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/packages/flutter_plus_plus/assets/images/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/packages/flutter_plus_plus/assets/images/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/packages/flutter_plus_plus/assets/images/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/packages/flutter_plus_plus/assets/images/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/packages/flutter_plus_plus/assets/images/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/packages/flutter_plus_plus/assets/images/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/packages/flutter_plus_plus/assets/images/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/packages/flutter_plus_plus/assets/images/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/packages/flutter_plus_plus/assets/images/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/packages/flutter_plus_plus/assets/images/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/packages/flutter_plus_plus/assets/images/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/packages/flutter_plus_plus/assets/images/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/packages/flutter_plus_plus/assets/images/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/packages/flutter_plus_plus/assets/images/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/packages/flutter_plus_plus/assets/images/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/packages/flutter_plus_plus/assets/images/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/packages/flutter_plus_plus/assets/images/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/packages/flutter_plus_plus/assets/images/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/packages/flutter_plus_plus/assets/images/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/packages/flutter_plus_plus/assets/images/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/flutter_plus_plus/assets/images/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/flutter_plus_plus/assets/images/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/packages/flutter_plus_plus/assets/images/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/packages/flutter_plus_plus/assets/images/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/packages/flutter_plus_plus/assets/images/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/packages/flutter_plus_plus/assets/images/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/packages/flutter_plus_plus/assets/images/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/packages/flutter_plus_plus/assets/images/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/packages/flutter_plus_plus/assets/images/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/packages/flutter_plus_plus/assets/images/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/packages/flutter_plus_plus/assets/images/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/packages/flutter_plus_plus/assets/images/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/packages/flutter_plus_plus/assets/images/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/packages/flutter_plus_plus/assets/images/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/packages/flutter_plus_plus/assets/images/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/packages/flutter_plus_plus/assets/images/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/packages/flutter_plus_plus/assets/images/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/packages/flutter_plus_plus/assets/images/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/packages/flutter_plus_plus/assets/images/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/packages/flutter_plus_plus/assets/images/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/packages/flutter_plus_plus/assets/images/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/packages/flutter_plus_plus/assets/images/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/packages/flutter_plus_plus/assets/images/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/flutter_plus_plus/assets/images/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/packages/flutter_plus_plus/assets/images/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/packages/flutter_plus_plus/assets/images/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/packages/flutter_plus_plus/assets/images/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/packages/flutter_plus_plus/assets/images/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/packages/flutter_plus_plus/assets/images/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/packages/flutter_plus_plus/assets/images/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/packages/flutter_plus_plus/assets/images/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/flutter_plus_plus/assets/images/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/packages/flutter_plus_plus/assets/images/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/flutter_plus_plus/assets/images/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/packages/flutter_plus_plus/assets/images/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/flutter_plus_plus/assets/images/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/packages/flutter_plus_plus/assets/images/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/packages/flutter_plus_plus/assets/images/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/packages/flutter_plus_plus/assets/images/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/packages/flutter_plus_plus/assets/images/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/packages/flutter_plus_plus/assets/images/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/packages/flutter_plus_plus/assets/images/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/packages/flutter_plus_plus/assets/images/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/packages/flutter_plus_plus/assets/images/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/packages/flutter_plus_plus/assets/images/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/packages/flutter_plus_plus/assets/images/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/packages/flutter_plus_plus/assets/images/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/packages/flutter_plus_plus/assets/images/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/packages/flutter_plus_plus/assets/images/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/packages/flutter_plus_plus/assets/images/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/packages/flutter_plus_plus/assets/images/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/packages/flutter_plus_plus/assets/images/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/packages/flutter_plus_plus/assets/images/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/packages/flutter_plus_plus/assets/images/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/packages/flutter_plus_plus/assets/images/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/packages/flutter_plus_plus/assets/images/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/flutter_plus_plus/assets/images/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/packages/flutter_plus_plus/assets/images/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/packages/flutter_plus_plus/assets/images/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/packages/flutter_plus_plus/assets/images/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/packages/flutter_plus_plus/assets/images/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/packages/flutter_plus_plus/assets/images/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/flutter_plus_plus/assets/images/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/packages/flutter_plus_plus/assets/images/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/packages/flutter_plus_plus/assets/images/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/packages/flutter_plus_plus/assets/images/flags/ut.png": "2dc51a0866186b124e20cfb6a7dee636",
"assets/packages/flutter_plus_plus/assets/images/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/packages/flutter_plus_plus/assets/images/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/packages/flutter_plus_plus/assets/images/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/packages/flutter_plus_plus/assets/images/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/packages/flutter_plus_plus/assets/images/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/packages/flutter_plus_plus/assets/images/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/packages/flutter_plus_plus/assets/images/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/packages/flutter_plus_plus/assets/images/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/flutter_plus_plus/assets/images/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/packages/flutter_plus_plus/assets/images/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/packages/flutter_plus_plus/assets/images/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/packages/flutter_plus_plus/assets/images/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/packages/flutter_plus_plus/assets/images/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/flutter_plus_plus/assets/images/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/flutter_plus_plus/assets/images/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/packages/flutter_plus_plus/assets/images/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/packages/flutter_plus_plus/assets/images/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_all.png": "3f7abb815aa79087051a13c4e22491e4",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_0.png": "9a0fe32cfca6c2f5b362c4125577460c",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_01.png": "8551d9cda9685dde54917ac286f82b2e",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_0123.png": "68f6ea4e363b11295a3634c7d5006be0",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_01_missing_0.png": "aa71f77bad46ca88735319ed14776a45",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_01_missing_1.png": "7f321814b8f696b1c6ca10dff0246f42",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_1.png": "fa11edf6a78693dc4b4e33be45889326",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_2.png": "6bd3a2eb9826d79f2f290b85937d72b1",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_23.png": "d0687ecdb6a8d8f68a1aa57e4e555cb3",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_23_missing_2.png": "9c79f3f79f8dcaca95925119a900a9e8",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_23_missing_3.png": "a7f26d1c1892c12d7a092c3129413756",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_3.png": "b2f04c37dd0fe50d59181ec90da6c40e",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_4.png": "b1a67f56c8140afc09eb388e12b7a7ba",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_45.png": "5fe07c89cbd4bc3179787fe77080c6b2",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_45_missing_4.png": "80697fe16adb8dec96ee2a0f0289d3c1",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_45_missing_5.png": "37e41c1bf27a8a9c5dde0c817944aacf",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_5.png": "c3771888059e713b1feb0f8d74d5c238",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_6.png": "8ad7b67f070cff229584b05fe17a2e4f",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_67.png": "4c6b660626fa6c607e87d3f9c00834f1",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_6789.png": "2136c618a836f589755c50582d3be484",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_67_missing_6.png": "a881ab4495c135d20c670e7b6d6398bd",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_67_missing_7.png": "8aa4362c0209d643d313a0ff6fcbb7ec",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_7.png": "36d7d9da458f44db87412050ac432944",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_8.png": "1adf41da73eb855ddf0883b75797826c",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_89.png": "5cd6357c5d59dd82ab3e48d77e3ffa6c",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_89_missing_8.png": "c37c10d37d977c40d23690a16cc4c44c",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_89_missing_9.png": "5503ffe1af1e51a75f2f1f7cad93585d",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_capturing_9.png": "fa6d70ba02896457a1f069d786ef50de",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0.png": "19b925a4c8e9ce30df10bd4064158f87",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01.png": "6e2ae64c3587a73a71504f2a6adba699",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_012.png": "e508576f39c40354eadeb5a156e0dcaf",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0123.png": "17e7c4116cca6230da5e4cfc13d58dcc",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01234.png": "4519bb323e92389bc4a93b5d8503c815",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_012345.png": "8f654269da554624b6d1d9fdf889b4a7",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0123456.png": "715e64c1a01883d7039e65fb1d75c5da",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01234567.png": "7acf099fe4499ca389b56746403f1b36",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_012345678.png": "c01a01d624a9649bca1410477dfa8645",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0123456789.png": "a3d441082a64b7d12f35d97a060c959c",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_012346.png": "df0bc34c1bb3a09e9483f1c4731ad60b",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0123467.png": "67f859b925feeb5a9ed1987594ab5a9e",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01234678.png": "854a5aea015d40875aea292199ec0735",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_012346789.png": "26d84590de85e889ca218fc82fa67e2f",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_012356789.png": "abf59c10ed757dec27c05f70389edb8c",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_012456789.png": "bd2ba2854f6eabfb8f83280919b88ce4",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01256789.png": "4573817cf13e7e080fac5875431035d6",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_013.png": "8408cf85c4f5f45ae21038c58dc35983",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0134.png": "a2b2768853ae6fbc1f78d99a8b5a4fa0",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01345.png": "00ceb7cc29f0c63e21b6f0c2d97fb066",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_013456.png": "211e137d137fa65a84fa20f9827aa9c8",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0134567.png": "ac4e11eeaaf68bee5588a0293f16123e",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01345678.png": "dd96965bbf6107610e329adb59c06143",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_013456789.png": "161a590c24c249350336e54bcd029631",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01345689.png": "631b3e1f315f8b1381edd96b3d6328bb",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0135.png": "00043e37f4be570e9bbaca1e25a296af",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01356.png": "ccd2d025087d638f7a77b23deb590f17",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_013567.png": "01a4bc43f5688a7f354111201a48a823",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0135678.png": "5c20163a87c283456ad86324c972c40d",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_01356789.png": "b88e561019af42b0e999d9015607562a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0156789.png": "002ccaec17a8cfa26f83bec834780ab2",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_02.png": "24b37756e5606572facdaa9b1c4903cd",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_023.png": "71474bb44c68b043c48628cd2453c1e5",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0234.png": "d646dba93990aa27d4cc76b67ff12816",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_02345.png": "2aa41212b8f07fdfc189a22699da452a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_023456.png": "93afb69dafc09c5fa64fa00e32e5cd7e",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0234567.png": "2afe16fc55e67fbac23500b553867219",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_02345678.png": "275e024ba249489e6e6cd516f8ae2404",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_023456789.png": "cfb7d6ffabb3bdc27e3ebea719db9253",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_03.png": "f23860fcea66cb4192dcb206d3fa4787",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_034.png": "48c34c0306d2c3fae26cbdf045feb823",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0345.png": "cbe619bb7edb6bde2101a17dfd0dc407",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_03456.png": "f011f51be1dbfe7ee421e26c63bfc8c6",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_034567.png": "6c0de088213b181d1829528f2d2de86a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0345678.png": "5116588082854478198a01ee229c6075",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_03456789.png": "ac79c9c5d0e44717efb2694091bd1319",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_04.png": "7cefe3e0ba6f3792885732669ff9335a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_045.png": "04f1c82b596c7d2b7422d13957f0571a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0456.png": "4a015c64e1b9506c8c39c77e637e401a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_04567.png": "b06b06d35e4c974648e7a0b1d204a602",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_045678.png": "6ef1e67de798e4aa35bb754b5201095f",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0456789.png": "a2d024d528e17b084a5d0679a0d99e56",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_05.png": "502733888fcd35069157674a27e2133f",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_056.png": "7723034adef5493111eead4252bbe6df",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0567.png": "00f6f3e820521eedb6e05eb386f205bf",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_05678.png": "48e556e1aefc80b608475e6e98dbdfff",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_056789.png": "cfd593a89bb141ca8a5dab07ceca0f80",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_06.png": "50d865b60859e9206d334d317eb51f22",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_067.png": "7d70c1ae4c0f8e3b36f0cbc0bf936392",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0678.png": "1f82c0e76e938a61dfba9b14c72f8beb",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_06789.png": "36f80c4205ae855d9434c4b9a572d524",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_07.png": "c2424fff00b0bf85bb6094a25c32af84",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_078.png": "ed78cdacafad11862716c9a455c61a38",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_0789.png": "52975cd34a068810c2653d528109632b",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_08.png": "1780e543d9f95817919cfbe56f5af9ab",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_089.png": "862fdf1a0fd695b14f6d1121a2a86bfd",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_09.png": "5ede576e531a96447c5b469eb9124c4b",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_1.png": "6b87f40f79161aa87795dcbbea77ca77",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_12.png": "4367dc0202506a7be07466908fdd5d21",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_123.png": "fddaee4195b44cb2d5d1cec9530d1a3c",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_1234.png": "cbe8b758b526d6e86e341b744c952f23",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_12345.png": "2c5b54bdac359610282808d8c6d58754",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_123456.png": "95888a19364b48aa31b0f364a0d6544f",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_1234567.png": "1411f783f35548f7dde65a87d038b0b5",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_12345678.png": "ec8be168d2cfea92185cb72d9156f8ce",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_123456789.png": "b1dc727a3fa56383ed521fb915420f72",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_12456789.png": "fbc47bbca824ae02f20312e2d9f0e035",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_13579.png": "6f9a29b4241cda306f2a988570452ec9",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_2.png": "0ee1227ee861e18d1a068a9e6e1376f5",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_23.png": "3d670ed4a1fef6e1a84197bf3a72b0c1",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_234.png": "569949db078ea827bc8305a7d2789709",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_2345.png": "97b42ecedb2dab521acef3e36da0f196",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_23456.png": "b06d7c53aa28bfe771a7cbd7bd9c0437",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_234567.png": "c6476d0f540ae77c23caa610b767cc48",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_2345678.png": "f6e85f5edb07cfd24a3966e0b48c0e56",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_23456789.png": "2b60ad9c8fa89267654c775afb826892",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_2456789.png": "6935d1f53f3c25737b9559a8285d4a6b",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_3.png": "176c5f5eb79cb7723b0675cd472a149d",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_34.png": "4dfdc6ffac08dc609aa6e42980aa1169",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_345.png": "86dd96f8ccac0cfb9927f7fb41d04c0e",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_3456.png": "70d875392f5718a8790e18dd200d6d7d",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_34567.png": "065287ee3a787bfb0a4da995eefe5dfc",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_345678.png": "8e33bcf6fb92530f108bae4e3507f923",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_3456789.png": "68c6411bce59f16d07e2e6ebf7c17232",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_4.png": "d1db5df76f69819f3f0023b013fffac0",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_45.png": "8a8a84651154f673fcc92305ad9bf3e0",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_456.png": "157e1d337b1325a71bdf260fbe3f12f9",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_4567.png": "28735acc2f2d7889727be9839df5b865",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_45678.png": "89d9a22e52a4df66b8a78366cdbcde3b",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_456789.png": "1e1684eaeb5ad19fe14aa134b8274a37",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_5.png": "867c39be0cc34da9bcf9c1603109ad12",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_56.png": "ece639b81e592fa350fd6d6edc739063",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_567.png": "150f5c7ca461c2a6c549cd66f8c5eb40",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_5678.png": "b0d35e28cc0ca4b6064f28e6497abaae",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_56789.png": "c2b3e18a4ad79a3b55f0d71b592d2222",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_6.png": "1ff3fb12506d3a2dbfcb7747b89537c2",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_67.png": "58f8a4a99e9f3b924ec043f6052348b6",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_678.png": "b2958b00e38834eb9c8226245544495a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_6789.png": "e387f25717fc33da39e381c7ad01b59a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_7.png": "e8dfc732cf9bc576a33873e47a9e2aa6",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_78.png": "b4405930fff5fbf7a8d6d069a0b73630",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_789.png": "bfd3cc7df6aabe7f58c3dfc1a66a8a1b",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_8.png": "fe7f7e7afe97f3dc1a060b192894678a",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_89.png": "3c15bf2e6cb718c1ad5bda99246ae163",
"assets/packages/flutter_plus_plus/assets/images/new_palms/palms_missing_9.png": "d3dd1656fe06d5bfea9eeac9d1686712",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour1.png": "f757410c4ce24426410d003e3f34426b",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour12.png": "9519774f2d58e247bf08396a01477dab",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour123.png": "fa35a7e945ce2092885722138c2e40fb",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour124.png": "0303e84968d98ae7560bacd6461f84da",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour13.png": "45b8f670fafb1fa4d83f4aeefe9057ae",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour134.png": "619a012ac734d12a9af611b4438d54c2",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour14.png": "a303036ee3cba368d48229a5625b2e78",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour2.png": "8981342bac0b4dff83ddd2916515ef44",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour23.png": "8dff6ad9a4c9390f29d04fce66b7eedb",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour234.png": "7e6df81cac334e609ad4375be74af4f5",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour24.png": "63ce9e4890abda8a08b8a5561e08cbe3",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour3.png": "77587662b6305e8033b84efec2f12537",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour34.png": "231eedf7f3a82c91839ba8d83ea7780d",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFour4.png": "f393fcfbf5fd202e81e602ba5f84faf6",
"assets/packages/flutter_plus_plus/assets/images/palms/LeftFourAll.png": "f2e7b84cf1e46a460fb2820cac0c20b3",
"assets/packages/flutter_plus_plus/assets/images/palms/LefttFour24.png": "231eedf7f3a82c91839ba8d83ea7780d",
"assets/packages/flutter_plus_plus/assets/images/palms/My%2520project-1%2520(17).png": "368c183c3ee3075b10edd92372e70f78",
"assets/packages/flutter_plus_plus/assets/images/palms/My%2520project-1%2520(6).png": "9519774f2d58e247bf08396a01477dab",
"assets/packages/flutter_plus_plus/assets/images/palms/palms.png": "bc5cfa92674003dac46037ced7889b6d",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour1.png": "032869bf009d1a64a9b57c0e2f476a2f",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour12.png": "90ed0d4630d1b0c4bf136577503c25bb",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour123.png": "718e000a1d76b4ad3ee2ce63e5405203",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour124.png": "fcd0455187c5cfd026f2cceae1e775c3",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour13.png": "1042c1e3f1746c39c8c73c22571c0aaa",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour134.png": "9414f05dd34a1e7caa7eaf98072ce911",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour14.png": "155515e018ba6a0d346d21528c7e19c5",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour2.png": "d7dc6ad64f4e7b182560934a78a615bd",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour234.png": "7a805b2d8a2664f01df04a99953f5753",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour24.png": "f5c056f60777e2997272491a3be58118",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour3.png": "c4f1ae0736b232e378f52b256d1db60f",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour34.png": "14134be12a9c6be438022c6724bfadff",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFour4.png": "e5a08c9d56fcf522c63897d74eabdf85",
"assets/packages/flutter_plus_plus/assets/images/palms/RightFourAll.png": "edea865d207ca1e9d2eb2cc180ec727c",
"assets/packages/flutter_plus_plus/assets/images/palms/Thumb1.png": "392fef658dc95ff1b11492bf2e043e07",
"assets/packages/flutter_plus_plus/assets/images/palms/Thumb2.png": "343cc6e67424b1bd05023bc5fba4ad55",
"assets/packages/flutter_plus_plus/assets/images/palms/ThumbAll.png": "55ed8deacd6a45a2db0555e7b861f144",
"assets/packages/flutter_plus_plus/assets/images/person_walking.png": "a7bd9af0ab18374a8533dbbed21d8223",
"assets/packages/flutter_plus_plus/assets/lottie/cloud_and_server.json": "e0dd25d1b7a2a688837b4d6a6f0630ff",
"assets/packages/flutter_plus_plus/assets/lottie/email.json": "40cd266a5d76a9e7bfc665820ac9598b",
"assets/packages/flutter_plus_plus/assets/lottie/finish_line.json": "9389c38be785c8087e64ba6061d2784d",
"assets/packages/flutter_plus_plus/assets/lottie/flag_namibia_lottie.json": "1dfac4a3f97b922789ba82758ccc2f04",
"assets/packages/flutter_plus_plus/assets/lottie/forgot_password.json": "9eb46f72f24fbe2a27952727999c891e",
"assets/packages/flutter_plus_plus/assets/lottie/loading.json": "5a80b7f406b65ef1e30c9d4ab7d7dc88",
"assets/packages/flutter_plus_plus/assets/lottie/loading_1.json": "30628183b5d2f8cdc7794bf0ac248914",
"assets/packages/flutter_plus_plus/assets/lottie/loading_2.json": "54a349ee9bb366bafd84d56ffa734114",
"assets/packages/flutter_plus_plus/assets/lottie/loading_3.json": "6aa165273152072f88d2cc1997a325e5",
"assets/packages/flutter_plus_plus/assets/lottie/loading_4.json": "7ed6ab8b3b7933be2dcc1e577e53fb30",
"assets/packages/flutter_plus_plus/assets/lottie/loading_5.json": "e92da58a3bb5f4892bd9da95e9381b6e",
"assets/packages/flutter_plus_plus/assets/lottie/loading_6.json": "87e7f6002d9ce45a0a337ba91aff7966",
"assets/packages/flutter_plus_plus/assets/lottie/login.json": "992e3aa55f617bc416ad076af302e823",
"assets/packages/flutter_plus_plus/assets/lottie/logout.json": "67668a6eb19af735b9ee5c9738f4f388",
"assets/packages/flutter_plus_plus/assets/lottie/no_connection_lottie.json": "84c600f7097500bad74bbbf87d6b3bad",
"assets/packages/flutter_plus_plus/assets/lottie/no_results_lottie.json": "7cad45dc5f70490be92316840df84fb3",
"assets/packages/flutter_plus_plus/assets/lottie/otp.json": "501513a09d6d26ced2dbb19f4cf5b53d",
"assets/packages/flutter_plus_plus/assets/lottie/server_connection_lottie.json": "a16e1b86b15af154494c7a5c240c3a3d",
"assets/packages/flutter_plus_plus/assets/lottie/server_no_connection_lottie.json": "790c7b2a98e416d28eb9c490356a3408",
"assets/packages/flutter_plus_plus/assets/lottie/success.json": "101f5df33475a1e2dfd59cd9964e2a8f",
"assets/packages/flutter_plus_plus/assets/lottie/unavailable.json": "8a911c86650d8ba6965b64a6e841c540",
"assets/packages/flutter_plus_plus/assets/lottie/walking_woman.json": "69a79d0f4588d9dbb64ce47ab05516bf",
"assets/packages/flutter_plus_plus/assets/svg/dark_mode_switch_icon.svg": "989b8ddea03961c5c8521185d206162b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9fe265882cd4e6513d9f166022d597aa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "602e0df9c5fbc8cbd244de43ff5400ab",
"/": "602e0df9c5fbc8cbd244de43ff5400ab",
"main.dart.js": "83b9e00992baf7dfb435128e66329063",
"manifest.json": "ccaa00c131ba53ef4ec171ecf790c035",
"version.json": "32f07fd81922faabc9f386f6c5a8957d",
"web.config": "ac30ffa2e8f09919f46a81a5272b5fec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
