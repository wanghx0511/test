
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class FurniturePromoteUI extends View {
		public close:Laya.Image;
		public sb1:Laya.Image;
		public s1:Laya.Image;
		public sb2:Laya.Image;
		public s2:Laya.Image;
		public sb3:Laya.Image;
		public s3:Laya.Image;
		public pb1:Laya.Image;
		public p1:Laya.Image;
		public pb2:Laya.Image;
		public p2:Laya.Image;
		public pb3:Laya.Image;
		public p3:Laya.Image;
		public item:Laya.Image;
		public btn_upgrade:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1316,"height":919},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/FurniturePromote/Bg_Window.png","name":"BG"}},{"type":"Image","props":{"y":42,"x":1213,"var":"close","skin":"ui/FurniturePromote/BT_Close.png","name":"Close"}},{"type":"Image","props":{"y":32,"x":579,"skin":"ui/FurniturePromote/Lable_Table.png","name":"Title"}},{"type":"Sprite","props":{"y":125,"x":39,"width":1243,"name":"Details","height":515},"child":[{"type":"Image","props":{"y":18.000000000000057,"x":24.999999999999886,"width":1186,"skin":"ui/FurniturePromote/Bg_01.png","sizeGrid":"46,0,51,0","name":"Bg","height":456}},{"type":"Sprite","props":{"y":389,"x":174.9999999999999,"width":213,"name":"Level","height":68},"child":[{"type":"Image","props":{"y":4,"x":33,"var":"sb1","skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg1"},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"var":"s1","skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":85,"width":46,"var":"sb2","skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"var":"s2","skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":132,"width":46,"var":"sb3","skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"var":"s3","skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":8,"x":35,"var":"pb1","skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg1"},"child":[{"type":"Image","props":{"y":7.000000000000114,"x":4.999999999999886,"var":"p1","skin":"ui/FurniturePromote/Round.png","name":"round1"}}]},{"type":"Image","props":{"y":8,"x":86.00000000000011,"var":"pb2","skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg2"},"child":[{"type":"Image","props":{"y":6.000000000000114,"x":4.999999999999773,"var":"p2","skin":"ui/FurniturePromote/Round.png","name":"round2"}}]},{"type":"Image","props":{"y":8,"x":135,"var":"pb3","skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg3"},"child":[{"type":"Image","props":{"y":6,"x":4.999999999999886,"var":"p3","skin":"ui/FurniturePromote/Round.png","name":"round3"}}]}]},{"type":"Image","props":{"y":245,"x":284,"width":409,"var":"item","skin":"stage/baowenlu.png","pivotY":177,"pivotX":212,"name":"Furniture","height":335}},{"type":"Label","props":{"y":108,"x":567.0000000000002,"width":191,"text":"制作时间","name":"Des1","height":55,"fontSize":40,"font":"SimHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":176,"x":555,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":180,"width":117,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":184,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":104.00000000000006,"x":1117.9999999999998,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}},{"type":"Label","props":{"y":290,"x":567.9999999999998,"width":191,"text":"顾客耐心","name":"Des2","height":55,"fontSize":40,"font":"Microsoft YaHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":366,"x":554,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":146,"width":151,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":154,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":294.9999999999999,"x":1119.0000000000002,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}}]},{"type":"Sprite","props":{"y":662,"x":446,"width":419,"name":"Promote","height":234},"child":[{"type":"Image","props":{"y":20.000000000000114,"x":-4,"var":"btn_upgrade","skin":"ui/FurniturePromote/BT_Green.png","name":"Promote"},"child":[{"type":"Image","props":{"y":35.999999999999886,"x":142.00000000000045,"skin":"ui/FurniturePromote/Lable_Promote.png"}}]},{"type":"Image","props":{"y":165,"x":109.99999999999977,"skin":"ui/FurniturePromote/JB_little.png","name":"JB"}},{"type":"Label","props":{"y":169.0000000000001,"x":191,"width":108,"text":"3000","name":"Price","height":59,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.FurniturePromoteUI.uiView);
        }
    }
}

module ui {
    export class MainTownUI extends View {
		public upgrade:Laya.Image;
		public setting:Laya.Image;
		public start:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Sprite","props":{"y":5.999999999999996,"x":7.9999999999999165,"width":543,"name":"TopLeft","height":147},"child":[{"type":"Image","props":{"y":11.99999999999999,"x":89.99999999999989,"skin":"ui/MainTown/nameBg.png","name":"namebg"}},{"type":"Image","props":{"y":74,"x":112,"width":242,"skin":"ui/MainTown/progressLevelbg.png","sizeGrid":"0,33,0,36","name":"Progressbg","height":52}},{"type":"Image","props":{"y":-1.0000000000000187,"x":-2.9999999999998233,"skin":"ui/MainTown/kuang.png","name":"bg"}},{"type":"Image","props":{"y":85,"x":122,"width":134,"skin":"ui/MainTown/progressBlue.png","sizeGrid":"0,20,0,33","name":"Progress","height":30}},{"type":"Label","props":{"y":80,"x":130,"width":128,"underline":false,"text":"Lv. 12","strokeColor":"#000000","stroke":4,"name":"NumLevel","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":17,"x":147,"width":234,"underline":false,"text":"名字六个字","strokeColor":"#000000","stroke":4,"name":"Name","height":56,"fontSize":40,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":11,"x":418,"skin":"ui/MainTown/icon_Vip.png","name":"Vip"}},{"type":"Image","props":{"y":10,"x":488,"width":57,"skin":"ui/MainTown/icon_up.png","name":"up","height":60}}]},{"type":"Sprite","props":{"y":22.999999999999964,"x":566.9999999999999,"width":853,"name":"Top","height":246},"child":[{"type":"Image","props":{"y":114,"x":785,"var":"upgrade","skin":"ui/MainTown/btInfo.png","name":"info"}},{"type":"Sprite","props":{"y":7.000000000000014,"x":13,"width":225,"name":"Res01","height":183},"child":[{"type":"Image","props":{"y":-9.000000000000075,"x":27.999999999999886,"skin":"ui/MainTown/restaurant1.png","name":"Res01"}},{"type":"Image","props":{"y":113,"x":14,"width":202,"skin":"ui/MainTown/progressBg.png","sizeGrid":"0,39,0,31","name":"Progressbg","height":56},"child":[{"type":"Image","props":{"y":9.000000000000043,"x":11,"width":154,"skin":"ui/MainTown/progressGreen.png","sizeGrid":"0,22,0,24","name":"Progress","height":36}},{"type":"Label","props":{"y":8.000000000000043,"x":51,"width":126,"text":"40/45","stroke":3,"name":"NumJB","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":-15.999999999999929,"x":-22.999999999999773,"skin":"ui/MainTown/starLittle.png","name":"Star"}}]}]},{"type":"Sprite","props":{"y":44,"x":291,"width":225,"name":"Res02","height":183},"child":[{"type":"Image","props":{"y":6.000000000000007,"x":23,"skin":"ui/MainTown/restaurant2.png","name":"Res02"}},{"type":"Image","props":{"y":109.00000000000006,"x":18.999999999999886,"width":202,"skin":"ui/MainTown/progressBg.png","sizeGrid":"0,39,0,31","name":"Progressbg","height":56},"child":[{"type":"Image","props":{"y":9.000000000000043,"x":11,"width":154,"skin":"ui/MainTown/progressGreen.png","sizeGrid":"0,22,0,24","name":"Progress","height":36}},{"type":"Label","props":{"y":8.000000000000043,"x":51,"width":126,"text":"40/45","stroke":3,"name":"NumJB","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":-15.999999999999929,"x":-22.999999999999773,"skin":"ui/MainTown/starLittle.png","name":"Star"}}]}]},{"type":"Sprite","props":{"y":8,"x":560,"width":225,"name":"Res03","height":183},"child":[{"type":"Image","props":{"y":-11.999999999999961,"x":29.000000000000114,"skin":"ui/MainTown/restaurant3.png","name":"Res03"}},{"type":"Image","props":{"y":112.00000000000003,"x":18.00000000000034,"width":202,"skin":"ui/MainTown/progressBg.png","sizeGrid":"0,39,0,31","name":"Progressbg","height":56},"child":[{"type":"Image","props":{"y":9.000000000000043,"x":11,"width":154,"skin":"ui/MainTown/progressGreen.png","sizeGrid":"0,22,0,24","name":"Progress","height":36}},{"type":"Label","props":{"y":8.000000000000043,"x":51,"width":126,"text":"40/45","stroke":3,"name":"NumJB","height":44,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":-15.999999999999929,"x":-22.999999999999773,"skin":"ui/MainTown/starLittle.png","name":"Star"}}]}]}]},{"type":"Sprite","props":{"y":7,"x":1518,"width":407,"name":"Moneyinfo","height":287},"child":[{"type":"Sprite","props":{"y":4,"x":2,"width":395,"name":"JB","height":82},"child":[{"type":"Image","props":{"y":-2.842170943040401e-14,"x":33,"skin":"ui/MainTown/moneyBg.png","name":"bg"}},{"type":"Image","props":{"y":-2.000000000000007,"x":12.000000000000227,"skin":"ui/MainTown/jinbi.png","name":"JB"}},{"type":"Image","props":{"y":9.000000000000025,"x":329,"skin":"ui/MainTown/addicon.png","name":"add"}},{"type":"Label","props":{"y":7,"x":101,"width":216,"text":"45678","name":"NumJB","height":66,"fontSize":45,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Sprite","props":{"y":96,"x":3,"width":395,"name":"Zuan","height":82},"child":[{"type":"Image","props":{"y":-1,"x":32,"skin":"ui/MainTown/moneyBg.png","name":"bg"}},{"type":"Image","props":{"y":-1,"x":11,"skin":"ui/MainTown/zuan.png","name":"JB"}},{"type":"Image","props":{"y":10,"x":328,"skin":"ui/MainTown/addicon.png","name":"add"}},{"type":"Label","props":{"y":6,"x":101,"width":216,"text":"120","name":"NumJB","height":66,"fontSize":45,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}}]},{"type":"Sprite","props":{"y":190,"x":2,"width":395,"name":"Heart","height":82},"child":[{"type":"Image","props":{"y":-2,"x":34,"skin":"ui/MainTown/moneyBg.png","name":"bg"}},{"type":"Image","props":{"y":-2,"x":7,"skin":"ui/MainTown/heart.png"}},{"type":"Image","props":{"y":9,"x":330,"skin":"ui/MainTown/addicon.png","name":"add"}},{"type":"Label","props":{"y":5,"x":103,"width":216,"text":"20/100","name":"NumJB","height":66,"fontSize":45,"font":"Microsoft YaHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":74,"x":102,"skin":"ui/MainTown/readyBg.png","name":"bg"}},{"type":"Image","props":{"y":77,"x":149,"skin":"ui/MainTown/ready.png","name":"Ready"}}]}]},{"type":"Sprite","props":{"y":158.00000000000003,"x":19.999999999999908,"width":136,"name":"Left","height":881},"child":[{"type":"Image","props":{"y":-2.0000000000000284,"x":4.000000000000075,"skin":"ui/MainTown/btSignIn.png","name":"SignIn"}},{"type":"Image","props":{"y":121.99999999999997,"x":4.000000000000075,"skin":"ui/MainTown/btTask.png","name":"Task"}},{"type":"Image","props":{"y":248.99999999999997,"x":4.000000000000075,"skin":"ui/MainTown/btActivity.png","name":"Activity"}},{"type":"Image","props":{"y":369,"x":9.000000000000167,"skin":"ui/MainTown/btEmail.png","name":"Email"}},{"type":"Image","props":{"y":497.9999999999999,"x":3.000000000000057,"skin":"ui/MainTown/btFriend.png","name":"Friend"}},{"type":"Image","props":{"y":623.9999999999999,"x":4.000000000000075,"var":"setting","skin":"ui/MainTown/btSetting.png","name":"Setting"}},{"type":"Image","props":{"y":749.9999999999999,"x":4.000000000000075,"skin":"ui/MainTown/btBank.png","name":"Rank"}}]},{"type":"Sprite","props":{"y":340,"x":1612,"width":315,"name":"Activity","height":293},"child":[{"type":"Image","props":{"y":0,"x":198,"skin":"ui/MainTown/activityFirstcharge.png","name":"FirstCharge"}},{"type":"Image","props":{"y":147,"x":17,"skin":"ui/MainTown/activityEightDay.png","name":"EightDay"}}]},{"type":"Sprite","props":{"y":902.9999999999999,"x":941.9999999999999,"width":966,"name":"BottomRight","height":174},"child":[{"type":"Image","props":{"y":16.000000000000114,"x":26.999999999999886,"skin":"ui/MainTown/bg02.png","name":"bg"}},{"type":"Image","props":{"y":34,"x":39.000000000000114,"skin":"ui/MainTown/btCard.png","name":"Card"}},{"type":"Image","props":{"y":24.000000000000114,"x":263.9999999999998,"skin":"ui/MainTown/btBag.png","name":"Bag"}},{"type":"Image","props":{"y":24.000000000000114,"x":410,"skin":"ui/MainTown/btAchievement.png","name":"Achievement"}},{"type":"Image","props":{"y":20,"x":613.9999999999998,"var":"start","skin":"ui/MainTown/btOpen.png","name":"Open"}},{"type":"Image","props":{"y":12,"x":510,"skin":"ui/MainTown/redpoint.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MainTownUI.uiView);
        }
    }
}

module ui {
    export class PauseInfoUI extends View {
		public continue:Laya.Image;
		public close:Laya.Image;
		public quit:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":135,"x":464,"skin":"ui/Pause/BG.png","name":"bg"}},{"type":"Image","props":{"y":278,"x":530,"skin":"ui/Pause/bg03.png","name":"bg01"}},{"type":"Image","props":{"y":166,"x":896,"skin":"ui/Pause/lable_pause.png","name":"title"}},{"type":"Image","props":{"y":779,"x":988,"var":"continue","skin":"ui/Pause/BT_Green02.png"},"child":[{"type":"Image","props":{"y":37.000000000000114,"x":102.99999999999977,"skin":"ui/Pause/Lable_jixu.png"}}]},{"type":"Image","props":{"y":177,"x":1358,"var":"close","skin":"ui/Pause/BT_Close.png"}},{"type":"Image","props":{"y":779,"x":523,"var":"quit","skin":"ui/Pause/BT_red02.png"},"child":[{"type":"Image","props":{"y":38.000000000000114,"x":104,"skin":"ui/Pause/Lable_Quit.png"}}]},{"type":"Sprite","props":{"y":287,"x":551,"width":419,"name":"Music","height":288},"child":[{"type":"Sprite","props":{"y":98.99999999999994,"x":15.999999999999773,"width":315,"name":"close","height":144},"child":[{"type":"Image","props":{"y":34.99999999999994,"x":19,"skin":"ui/Pause/close_bg.png"}},{"type":"Image","props":{"y":32.99999999999983,"x":15.999999999999545,"skin":"ui/Pause/kuang01.png"}},{"type":"Image","props":{"y":6.999999999999943,"x":8.999999999999659,"skin":"ui/Pause/Music_close.png","name":"close"}},{"type":"Image","props":{"y":53.00000000000006,"x":163.99999999999977,"skin":"ui/Pause/Lable_close.png","name":"des"}}]},{"type":"Sprite","props":{"y":99,"x":16,"width":315,"visible":false,"name":"open","height":144},"child":[{"type":"Image","props":{"y":35,"x":54,"width":239,"skin":"ui/Pause/openbg.png","height":74}},{"type":"Image","props":{"y":33,"x":47,"width":249,"skin":"ui/Pause/kuang01.png","height":80}},{"type":"Image","props":{"y":50,"x":89,"skin":"ui/Pause/lable_open.png"}},{"type":"Image","props":{"y":6.9999999999998295,"x":196.99999999999977,"skin":"ui/Pause/Muscie_open.png","name":"open"}}]},{"type":"Label","props":{"y":31.999999999943,"x":137.99999999999977,"width":106,"text":"音乐","height":56,"fontSize":40,"font":"Microsoft YaHei","color":"#083c5f","bold":true,"align":"center"}}]},{"type":"Sprite","props":{"y":288,"x":999,"width":369,"name":"Sound","height":288},"child":[{"type":"Sprite","props":{"y":98.99999999999994,"x":15.999999999999773,"width":315,"name":"close","height":144},"child":[{"type":"Image","props":{"y":34.99999999999994,"x":19,"skin":"ui/Pause/close_bg.png"}},{"type":"Image","props":{"y":32.99999999999983,"x":15.999999999999545,"skin":"ui/Pause/kuang01.png"}},{"type":"Image","props":{"y":6.999999999999943,"x":8.999999999999659,"skin":"ui/Pause/Voice_hui.png","name":"close"}},{"type":"Image","props":{"y":53.00000000000006,"x":163.99999999999977,"skin":"ui/Pause/Lable_close.png","name":"des"}}]},{"type":"Sprite","props":{"y":99,"x":16,"width":315,"visible":false,"name":"open","height":144},"child":[{"type":"Image","props":{"y":35,"x":54,"width":239,"skin":"ui/Pause/openbg.png","height":74}},{"type":"Image","props":{"y":33,"x":47,"width":249,"skin":"ui/Pause/kuang01.png","height":80}},{"type":"Image","props":{"y":50,"x":89,"skin":"ui/Pause/lable_open.png","name":"des"}},{"type":"Image","props":{"y":6.9999999999998295,"x":196.99999999999977,"skin":"ui/Pause/Voice_liang.png","name":"open"}}]},{"type":"Label","props":{"y":32,"x":116.99999999999977,"width":106,"text":"音效","height":56,"fontSize":40,"font":"Microsoft YaHei","color":"#083c5f","bold":true,"align":"center"}}]},{"type":"Sprite","props":{"y":583,"x":577,"width":792,"name":"Volume","height":121},"child":[{"type":"Image","props":{"y":49.999999999999886,"x":147,"skin":"ui/Pause/Bar_03.png","name":"bar2"}},{"type":"Image","props":{"y":47,"x":147,"width":280,"skin":"ui/Pause/Bar02.png","sizeGrid":"0,44,0,32","name":"bar1","height":36}},{"type":"Image","props":{"y":46,"x":144.0000000000001,"skin":"ui/Pause/Bar01.png","name":"barbg"}},{"type":"Image","props":{"y":26.999999999999773,"x":384.9999999999999,"skin":"ui/Pause/BT01.png","name":"button"}},{"type":"Label","props":{"y":36.999999999999886,"x":20,"width":106,"text":"音量","height":56,"fontSize":40,"font":"Microsoft YaHei","color":"#083c5f","bold":true,"align":"center"}},{"type":"Label","props":{"y":-3,"x":661.9999999999998,"width":106,"text":"+","name":"+","height":56,"fontSize":40,"font":"Microsoft YaHei","color":"#083c5f","bold":true,"align":"center"}},{"type":"Label","props":{"y":-14.000000000000114,"x":132.0000000000001,"width":79,"text":"-","name":"-","height":62,"fontSize":50,"font":"Microsoft YaHei","color":"#083c5f","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PauseInfoUI.uiView);
        }
    }
}

module ui {
    export class PreUpgradeInfoUI extends View {
		public p1:Laya.Image;
		public p2:Laya.Image;
		public p3:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":300,"height":200},"child":[{"type":"Image","props":{"y":71,"x":76,"skin":"ui/Upgrade/shadow.png"}},{"type":"Image","props":{"y":100,"x":85,"skin":"ui/Upgrade/point.png"}},{"type":"Image","props":{"y":100,"x":135,"skin":"ui/Upgrade/point.png"}},{"type":"Image","props":{"y":100,"x":185,"skin":"ui/Upgrade/point.png"}},{"type":"Image","props":{"y":100,"x":85,"var":"p1","skin":"ui/Upgrade/pointS.png"}},{"type":"Image","props":{"y":100,"x":135,"var":"p2","skin":"ui/Upgrade/pointS.png"}},{"type":"Image","props":{"y":100,"x":185,"var":"p3","skin":"ui/Upgrade/pointS.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PreUpgradeInfoUI.uiView);
        }
    }
}

module ui {
    export class StageChooseInfoUI extends View {
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1315,"height":928},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":1315,"name":"Window","height":928},"child":[{"type":"Image","props":{"y":9,"x":9,"width":1302,"skin":"ui/StageChoose/Bg_Window.png","name":"Bg_Window","height":896}},{"type":"Image","props":{"y":50,"x":1207.0000000000002,"var":"close","skin":"ui/StageChoose/BT_Close.png"}},{"type":"Image","props":{"y":41,"x":555,"skin":"ui/StageChoose/Lable_Title.png","name":"Title"}}]},{"type":"Sprite","props":{"y":130,"x":33,"width":233,"visible":false,"name":"stageOpen","height":224},"child":[{"type":"Image","props":{"y":5.000000000000057,"x":12,"skin":"ui/StageChoose/Bg_Blue.png","name":"Bg"}},{"type":"Image","props":{"y":129,"x":14.000000000000114,"skin":"ui/StageChoose/BT_Green.png","name":"Stage"}},{"type":"Image","props":{"y":148,"x":65.99999999999994,"skin":"ui/StageChoose/Lable_Day_Green.png","name":"Day_Green"}},{"type":"Image","props":{"y":48,"x":11,"skin":"ui/StageChoose/Star_Bg_left.png","name":"bg_left"}},{"type":"Image","props":{"y":48,"x":11,"visible":false,"skin":"ui/StageChoose/Star_left.png","name":"Star_left"}},{"type":"Image","props":{"y":16,"x":69,"skin":"ui/StageChoose/Star_Bg_mid.png","name":"bg_mid"}},{"type":"Image","props":{"y":14,"x":70,"visible":false,"skin":"ui/StageChoose/Star_mid.png","name":"Star_mid"}},{"type":"Image","props":{"y":48,"x":153,"skin":"ui/StageChoose/Star_Bg_right.png","name":"bg_right"}},{"type":"Image","props":{"y":48,"x":154,"visible":false,"skin":"ui/StageChoose/Star_right.png","name":"Star_right"}}]},{"type":"Sprite","props":{"y":132,"x":30,"width":233,"visible":false,"name":"stageClose","height":224},"child":[{"type":"Image","props":{"y":5.000000000000057,"x":12,"skin":"ui/StageChoose/Bg_Grey.png","name":"Bg"}},{"type":"Image","props":{"y":129,"x":14.000000000000114,"skin":"ui/StageChoose/BT_Grey.png","name":"Stage"}},{"type":"Image","props":{"y":149,"x":65.99999999999994,"skin":"ui/StageChoose/Lable_Day_Grey.png","name":"Day_Grey"}},{"type":"Image","props":{"y":40,"x":83,"skin":"ui/StageChoose/Lock.png","name":"Lock"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageChooseInfoUI.uiView);
        }
    }
}

module ui {
    export class StageCloseUI extends View {
		public stageSn:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":233,"height":224},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":233,"name":"stageClose","height":224},"child":[{"type":"Image","props":{"y":5.000000000000057,"x":12,"skin":"ui/StageChoose/Bg_Grey.png","name":"Bg"}},{"type":"Image","props":{"y":129,"x":14.000000000000114,"skin":"ui/StageChoose/BT_Grey.png","name":"Stage"},"child":[{"type":"Box","props":{"y":20,"x":45},"child":[{"type":"Image","props":{"skin":"ui/StageChoose/Lable_Day_Grey.png","name":"Day_Grey"}},{"type":"Clip","props":{"y":0,"x":82,"var":"stageSn","skin":"ui/StageChoose/Num_Grey.png","index":1,"clipX":10}}]}]},{"type":"Image","props":{"y":40,"x":83,"skin":"ui/StageChoose/Lock.png","name":"Lock"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageCloseUI.uiView);
        }
    }
}

module ui {
    export class StageInfoUI extends View {
		public progressBar:Laya.ProgressBar;
		public starLeft:Laya.Image;
		public starMid:Laya.Image;
		public starRight:Laya.Image;
		public pause:Laya.Image;
		public day:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":1895,"height":145},"child":[{"type":"Image","props":{"y":9,"x":406,"skin":"ui/Level/bg02.png","name":"bg01"}},{"type":"Image","props":{"y":21,"x":419,"skin":"ui/Level/bg01.png","name":"bg02"}},{"type":"Image","props":{"y":8,"x":386,"skin":"ui/Level/costumeicon.png","name":"Costume"}},{"type":"ProgressBar","props":{"y":20,"x":719,"width":642,"var":"progressBar","value":0,"skin":"ui/Level/progress.png","height":45}},{"type":"Image","props":{"y":6,"x":704,"skin":"ui/Level/gold.png","name":"JB"}},{"type":"Image","props":{"y":42,"x":1026,"var":"starLeft","skin":"ui/Level/starYellow.png","gray":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":42,"x":1205,"var":"starMid","skin":"ui/Level/starYellow.png","gray":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":42,"x":1333,"var":"starRight","skin":"ui/Level/starYellow.png","gray":true,"anchorY":0.5,"anchorX":1}},{"type":"Image","props":{"y":8,"x":1759,"var":"pause","skin":"ui/Level/btPause.png"}},{"type":"Image","props":{"y":8,"x":11,"skin":"ui/Level/dayBg.png"},"child":[{"type":"Clip","props":{"y":56,"x":38,"var":"day","skin":"ui/Level/numWhite.png","index":1,"clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageInfoUI.uiView);
        }
    }
}

module ui {
    export class StageOpenUI extends View {
		public box:Laya.Box;
		public stageSn:Laya.Clip;
		public starLeft:Laya.Image;
		public starMid:Laya.Image;
		public starRight:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":233,"height":224},"child":[{"type":"Sprite","props":{"y":0,"x":0,"width":233,"name":"stageOpen","height":224},"child":[{"type":"Image","props":{"y":5.000000000000057,"x":12,"skin":"ui/StageChoose/Bg_Blue.png","name":"Bg"}},{"type":"Image","props":{"y":129,"x":14.000000000000114,"skin":"ui/StageChoose/BT_Green.png"},"child":[{"type":"Box","props":{"y":19,"x":45.5,"var":"box"},"child":[{"type":"Image","props":{"skin":"ui/StageChoose/Lable_Day_Green.png"}},{"type":"Clip","props":{"x":82,"var":"stageSn","skin":"ui/StageChoose/Num_Green.png","index":0,"clipX":10}}]}]},{"type":"Image","props":{"y":48,"x":11,"skin":"ui/StageChoose/Star_Bg_left.png","name":"bg_left"}},{"type":"Image","props":{"y":48,"x":11,"visible":false,"var":"starLeft","skin":"ui/StageChoose/Star_left.png"}},{"type":"Image","props":{"y":16,"x":69,"skin":"ui/StageChoose/Star_Bg_mid.png","name":"bg_mid"}},{"type":"Image","props":{"y":14,"x":70,"visible":false,"var":"starMid","skin":"ui/StageChoose/Star_mid.png"}},{"type":"Image","props":{"y":48,"x":153,"skin":"ui/StageChoose/Star_Bg_right.png","name":"bg_right"}},{"type":"Image","props":{"y":48,"x":154,"visible":false,"var":"starRight","skin":"ui/StageChoose/Star_right.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageOpenUI.uiView);
        }
    }
}

module ui {
    export class StageSettlementUI extends View {
		public back:Laya.Image;
		public defeat:Laya.Sprite;
		public retry:Laya.Image;
		public victory:Laya.Sprite;
		public next:Laya.Image;
		public again:Laya.Image;
		public detail:Laya.Sprite;
		public money:Laya.Label;
		public tip:Laya.Label;
		public manyi:Laya.Label;
		public bumanyi:Laya.Label;
		public progress:Laya.ProgressBar;
		public starOne:Laya.Image;
		public starTwo:Laya.Image;
		public starThree:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":10,"x":1790,"var":"back","skin":"ui/StageSettlement/BT_Back.png"}},{"type":"Sprite","props":{"y":108.00000000000003,"x":274,"width":1395,"visible":false,"var":"defeat","height":168},"child":[{"type":"Image","props":{"y":64,"x":-274,"skin":"ui/StageSettlement/Bg_Defeat.png","name":"BG"}},{"type":"Image","props":{"y":19,"x":17,"skin":"ui/StageSettlement/Title_Defeat.png","name":"Title_bg"}},{"type":"Image","props":{"y":-7.000000000000071,"x":477.9999999999999,"skin":"ui/StageSettlement/Defeat.png","name":"Defeat"}},{"type":"Sprite","props":{"y":160.99999999999991,"x":360.0000000000001,"width":667,"name":"Star","height":197},"child":[{"type":"Image","props":{"y":27.999999999999943,"x":26,"skin":"ui/StageSettlement/Star_Bg_left.png","name":"bg_star_left"}},{"type":"Image","props":{"y":-26,"x":215,"skin":"ui/StageSettlement/Star_Bg_mid.png","name":"bg_star_mid"}},{"type":"Image","props":{"y":26,"x":450,"skin":"ui/StageSettlement/Star_Bg_right.png","name":"bg_star_right"}}]},{"type":"Image","props":{"y":750,"x":455,"var":"retry","skin":"ui/StageSettlement/BT_Green.png"},"child":[{"type":"Image","props":{"y":40,"x":161.99999999999977,"skin":"ui/StageSettlement/Lable_retry.png"}}]}]},{"type":"Sprite","props":{"y":0,"x":0,"visible":false,"var":"victory"},"child":[{"type":"Image","props":{"y":173,"x":0,"skin":"ui/StageSettlement/Bg_Victory.png","name":"BG"}},{"type":"Image","props":{"y":127.00000000000003,"x":287.99999999999994,"skin":"ui/StageSettlement/Title_Victory.png","name":"Title_bg"}},{"type":"Image","props":{"y":101.00000000000007,"x":751.9999999999999,"skin":"ui/StageSettlement/Lable_Victory.png","name":"victory"}},{"type":"Image","props":{"y":858,"x":560,"var":"next","skin":"ui/StageSettlement/BT_Green.png"},"child":[{"type":"Image","props":{"y":40,"x":139,"skin":"ui/StageSettlement/Lable_Next.png"}}]},{"type":"Image","props":{"y":856,"x":1035,"var":"again","skin":"ui/StageSettlement/BT_Blue.png"},"child":[{"type":"Image","props":{"y":43.999999999999886,"x":70.99999999999977,"skin":"ui/StageSettlement/Lable_Again.png"}}]},{"type":"Image","props":{"y":307,"x":670.0000000000001,"skin":"ui/StageSettlement/Star_Bg_left.png","name":"bg_star_left"}},{"type":"Image","props":{"y":306.00000000000006,"x":669.0000000000001,"visible":false,"skin":"ui/StageSettlement/Star_left.png","name":"starLeft"}},{"type":"Image","props":{"y":253.00000000000003,"x":859,"skin":"ui/StageSettlement/Star_Bg_mid.png","name":"bg_star_mid"}},{"type":"Image","props":{"y":251.00000000000009,"x":858,"visible":false,"skin":"ui/StageSettlement/Star_mid.png","name":"starMid"}},{"type":"Image","props":{"y":305,"x":1094.0000000000002,"skin":"ui/StageSettlement/Star_Bg_right.png","name":"bg_star_right"}},{"type":"Image","props":{"y":305,"x":1094.9999999999998,"visible":false,"skin":"ui/StageSettlement/Star_right.png","name":"starRight"}}]},{"type":"Sprite","props":{"y":453.99999999999983,"x":380.9999999999999,"width":1141,"var":"detail","height":256},"child":[{"type":"Image","props":{"y":15.999999999999886,"x":29.000000000000057,"skin":"ui/StageSettlement/bg_01.png","name":"bg"}},{"type":"Image","props":{"y":60.000000000000114,"x":333.9999999999999,"skin":"ui/StageSettlement/xian.png","name":"line01"}},{"type":"Image","props":{"y":60.000000000000114,"x":636.0000000000002,"skin":"ui/StageSettlement/xian.png","name":"line02"}},{"type":"Image","props":{"y":147,"x":96,"skin":"ui/StageSettlement/JB_little.png","name":"JB"}},{"type":"Label","props":{"y":47.00000000000006,"x":140.00000000000006,"width":88,"text":"盈利","name":"Interest","height":61,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":147,"x":412,"skin":"ui/StageSettlement/Free_little.png","name":"Free"}},{"type":"Label","props":{"y":47.00000000000006,"x":446.00000000000017,"width":91,"text":"小费","name":"Free","height":66,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":148,"x":699.9999999999995,"skin":"ui/StageSettlement/Satisfied.png","name":"Satisfied"}},{"type":"Image","props":{"y":148,"x":918.0000000000002,"skin":"ui/StageSettlement/Unsatisfied.png","name":"Unsatisfied"}},{"type":"Label","props":{"y":48.00000000000006,"x":744,"width":265,"text":"顾客满意情况","name":"CustomerDes","height":66,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":157,"x":171,"width":99,"var":"money","text":"1000","height":45,"fontSize":40,"color":"#f4d80d","bold":true}},{"type":"Label","props":{"y":157,"x":476,"width":99,"var":"tip","text":"1000","height":45,"fontSize":40,"color":"#f4d80d","bold":true}},{"type":"Label","props":{"y":157,"x":769,"width":99,"var":"manyi","text":"1000","height":45,"fontSize":40,"color":"#f4d80d","bold":true}},{"type":"Label","props":{"y":157,"x":990,"width":99,"var":"bumanyi","text":"1000","height":45,"fontSize":40,"color":"#f4d80d","bold":true}}]},{"type":"ProgressBar","props":{"y":749,"x":699,"width":822,"var":"progress","skin":"ui/StageSettlement/Progress.png","height":50}},{"type":"Image","props":{"y":733.9999999999998,"x":673.9999999999999,"skin":"ui/StageSettlement/JB.png","name":"JB"}},{"type":"Label","props":{"y":746.9999999999998,"x":465.0000000000002,"width":186,"text":"关卡目标","name":"Interest","height":61,"fontSize":42,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Image","props":{"y":769,"x":1045,"var":"starOne","skin":"ui/StageSettlement/Star_little_yellow.png","gray":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":769,"x":1246,"var":"starTwo","skin":"ui/StageSettlement/Star_little_yellow.png","gray":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":768,"x":1420,"var":"starThree","skin":"ui/StageSettlement/Star_little_yellow.png","gray":true,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StageSettlementUI.uiView);
        }
    }
}

module ui {
    export class UpgradeInfoUI extends View {
		public strength:Laya.Image;
		public upgrade:Laya.Image;
		public p1:Laya.Image;
		public p2:Laya.Image;
		public p3:Laya.Image;
		public p4:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400,"alpha":1},"child":[{"type":"Image","props":{"y":0,"x":42,"skin":"ui/Upgrade/shadow_big.png","sizeGrid":"0,78,0,82"}},{"type":"Image","props":{"y":39,"x":61,"skin":"ui/Upgrade/point_big.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":39,"x":110,"skin":"ui/Upgrade/point_big.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":39,"x":163,"skin":"ui/Upgrade/point_big.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":39,"x":214,"skin":"ui/Upgrade/point_big.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":123,"x":175,"var":"strength","skin":"ui/Upgrade/quick_finish.png"}},{"type":"Image","props":{"y":123,"x":0,"var":"upgrade","skin":"ui/Upgrade/upgrade.png"}},{"type":"Image","props":{"y":39,"x":61,"var":"p1","skin":"ui/Upgrade/pointS_big.png"}},{"type":"Image","props":{"y":39,"x":110,"var":"p2","skin":"ui/Upgrade/pointS_big.png"}},{"type":"Image","props":{"y":39,"x":163,"var":"p3","skin":"ui/Upgrade/pointS_big.png"}},{"type":"Image","props":{"y":39,"x":214,"var":"p4","skin":"ui/Upgrade/pointS_big.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.UpgradeInfoUI.uiView);
        }
    }
}

module ui {
    export class UpgradeSuccessUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1920,"height":1080},"child":[{"type":"Image","props":{"y":197,"x":315,"skin":"ui/FurniturePromote/_0012_升级弹窗-底板.png","name":"Bg"}},{"type":"Image","props":{"y":127,"x":275,"skin":"ui/FurniturePromote/Title_Victory.png","name":"Title_bg"}},{"type":"Image","props":{"y":103,"x":743,"skin":"ui/FurniturePromote/Lable_intensify.png","name":"upgrade"}},{"type":"Image","props":{"y":102,"x":739,"skin":"ui/FurniturePromote/Lable_levelup.png","name":"intensify"}},{"type":"Sprite","props":{"y":302,"x":344,"width":1243,"name":"Details","height":515},"child":[{"type":"Image","props":{"y":18.000000000000057,"x":24.999999999999886,"width":1186,"skin":"ui/FurniturePromote/Bg_01.png","sizeGrid":"46,0,51,0","name":"Bg","height":456}},{"type":"Sprite","props":{"y":389,"x":174.9999999999999,"width":213,"name":"Level","height":68},"child":[{"type":"Image","props":{"y":4,"x":33,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg1"},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":85,"width":46,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":4,"x":132,"width":46,"skin":"ui/FurniturePromote/Star_bg.png","name":"star_bg2","height":46},"child":[{"type":"Image","props":{"y":8.000000000000114,"x":4.000000000000227,"skin":"ui/FurniturePromote/Star.png","name":"star1"}}]},{"type":"Image","props":{"y":8,"x":35,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg1"},"child":[{"type":"Image","props":{"y":7.000000000000114,"x":4.999999999999886,"skin":"ui/FurniturePromote/Round.png","name":"round1"}}]},{"type":"Image","props":{"y":8,"x":86.00000000000011,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg2"},"child":[{"type":"Image","props":{"y":6.000000000000114,"x":4.999999999999773,"skin":"ui/FurniturePromote/Round.png","name":"round2"}}]},{"type":"Image","props":{"y":8,"x":135,"skin":"ui/FurniturePromote/Round_bg.png","name":"round_bg3"},"child":[{"type":"Image","props":{"y":6,"x":4.999999999999886,"skin":"ui/FurniturePromote/Round.png","name":"round3"}}]}]},{"type":"Image","props":{"y":65,"x":71.00000000000006,"skin":"ui/zhuozi2.png","name":"Furniture"}},{"type":"Label","props":{"y":108,"x":567.0000000000002,"width":191,"text":"制作时间","name":"Des1","height":55,"fontSize":40,"font":"SimHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":176,"x":555,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":180,"width":117,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":184,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":104.00000000000006,"x":1117.9999999999998,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}},{"type":"Label","props":{"y":290,"x":567.9999999999998,"width":191,"text":"顾客耐心","name":"Des2","height":55,"fontSize":40,"font":"Microsoft YaHei","color":"#05466b","bold":true}},{"type":"Image","props":{"y":366,"x":554,"skin":"ui/FurniturePromote/Progtess_bg.png","name":"Progress_bg"},"child":[{"type":"Image","props":{"y":9,"x":146,"width":151,"skin":"ui/FurniturePromote/Progress_orange.png","sizeGrid":"0,27,0,22","name":"orange","height":28}},{"type":"Image","props":{"y":9,"x":9,"width":154,"skin":"ui/FurniturePromote/Progress_green.png","sizeGrid":"0,67,0,64","name":"green","height":28}}]},{"type":"Image","props":{"y":294.9999999999999,"x":1119.0000000000002,"skin":"ui/FurniturePromote/Arrow_green.png","name":"up"}}]},{"type":"Image","props":{"y":848,"x":757,"skin":"ui/FurniturePromote/BT_Green.png","name":"Confirm"},"child":[{"type":"Image","props":{"y":30.999999999999886,"x":140.00000000000023,"skin":"ui/FurniturePromote/Lable_Confirm.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.UpgradeSuccessUI.uiView);
        }
    }
}
