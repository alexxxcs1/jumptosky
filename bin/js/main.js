var Stage = Laya.Stage;	//new Stage() 非stage prop
var Text  = Laya.Text;	
var WebGL = Laya.WebGL;
var Loader  = Laya.Loader;
var Texture = Laya.Texture;
var Handler = Laya.Handler;
var Sprite = Laya.Sprite;
var Browser = Laya.Browser;
var Tween   = Laya.Tween;
var List    = Laya.List;
var Browser = laya.utils.Browser;
var Event   = Laya.Event;
var Rectangle = Laya.Rectangle;
var VSlider = Laya.VSlider;
var Handler = Laya.Handler;
var List    = Laya.List;
var Img = Laya.Image;
var Button  = Laya.Button;
var Animation = Laya.Animation;
var Box   = Laya.Box;
var ColorFilter = Laya.ColorFilter;
var LayaCanvas = Laya.HTMLCanvas;
var TextInput = Laya.TextInput;
var Ease    = Laya.Ease;
var GlowFilter = Laya.GlowFilter;
    
var DesignProp = {
    width:640,
    height:1136,
    background:'#fff',
}
var tool = {
    defaultCreateSprite:function(frame)
    {
        for (var i = 0; i < frame.staticSprite.length; i++) {
            frame.staticSprite[i].init?frame.staticSprite[i].init():'';
            var t = Laya.loader.getRes(frame.staticSprite[i].url);
            frame.staticSprite[i].SpriteBase = new Sprite();
            frame.staticSprite[i].SpriteBase.graphics.drawTexture(t,0,0);
            frame.ctn.addChild(frame.staticSprite[i].SpriteBase);
            
            frame.staticSprite[i].SpriteBase.x = frame.staticSprite[i].x;	
            frame.staticSprite[i].SpriteBase.y = frame.staticSprite[i].y;

            !isNaN(frame.staticSprite[i].alpha)?frame.staticSprite[i].SpriteBase.alpha = frame.staticSprite[i].alpha:'';
                
            frame.staticSprite[i].pivot?frame.staticSprite[i].SpriteBase.pivot(frame.staticSprite[i].pivot[0],frame.staticSprite[i].pivot[1]):'';
            frame.staticSprite[i].scaleX?frame.staticSprite[i].SpriteBase.scaleX = frame.staticSprite[i].scaleX:'';
            frame.staticSprite[i].scaleY?frame.staticSprite[i].SpriteBase.scaleY = frame.staticSprite[i].scaleY:'';
            frame.staticSprite[i].rotation?frame.staticSprite[i].SpriteBase.rotation = frame.staticSprite[i].rotation:'';

            var tweenbackfunc = null;
            frame.staticSprite[i].TweenBack?tweenbackfunc = frame.staticSprite[i].TweenBack:null;

            frame.staticSprite[i].TweenFrom?Tween.from(frame.staticSprite[i].SpriteBase,frame.staticSprite[i].TweenFrom,
             frame.staticSprite[i].TweenTime?frame.staticSprite[i].TweenTime:1000,
             frame.staticSprite[i].TweenType?Ease[frame.staticSprite[i].TweenType]:Ease['linearNone'],
             Handler.create(frame.staticSprite[i],function(){
                 this.TweenBack?this.TweenBack():'';
                 this.infinity?this.infinity.type=='noback'?new createjs.Tween.get(this.SpriteBase,{loop:true})
                                                        .to(this.infinity.from,0,this.infinity.ease?this.infinity.ease:'')
														.to(this.infinity.to,this.infinity.duringtime?this.infinity.duringtime:1000,
                                                         this.infinity.ease?this.infinity.ease:''):
                                                        new createjs.Tween.get(this.SpriteBase,{loop:true})
                                                        .to(this.infinity.from,0,this.infinity.ease?this.infinity.ease:'')
														.to(this.infinity.to,this.infinity.duringtime?this.infinity.duringtime:1000,
                                                         this.infinity.ease?this.infinity.ease:'')
														.to(this.infinity.from,this.infinity.duringtime?this.infinity.duringtime:1000,
                                                        this.infinity.ease?this.infinity.ease:''):'';
                },[frame.staticSprite[i].TweenBack]),
             frame.staticSprite[i].delay?frame.staticSprite[i].delay:0):'';


            frame.staticSprite[i].TweenTo?Tween.to(frame.staticSprite[i].SpriteBase,frame.staticSprite[i].TweenTo,
             frame.staticSprite[i].TweenTime?frame.staticSprite[i].TweenTime:1000,
             frame.staticSprite[i].TweenType?Ease[frame.staticSprite[i].TweenType]:Ease['linearNone'],
             Handler.create(frame.staticSprite[i],function(){
                 this.TweenBack?this.TweenBack():'';
                 this.infinity?this.infinity.type=='noback'?new createjs.Tween.get(this.SpriteBase,{loop:true})
                                                        .to(this.infinity.from,0,this.infinity.ease?this.infinity.ease:'')
														.to(this.infinity.to,this.infinity.duringtime?this.infinity.duringtime:1000,
                                                         this.infinity.ease?this.infinity.ease:''):
                                                        new createjs.Tween.get(this.SpriteBase,{loop:true})
                                                        .to(this.infinity.from,0,this.infinity.ease?this.infinity.ease:'')
														.to(this.infinity.to,this.infinity.duringtime?this.infinity.duringtime:1000,
                                                         this.infinity.ease?this.infinity.ease:'')
														.to(this.infinity.from,this.infinity.duringtime?this.infinity.duringtime:1000,
                                                        this.infinity.ease?this.infinity.ease:''):'';
                },[frame.staticSprite[i].TweenBack]),
             frame.staticSprite[i].delay?frame.staticSprite[i].delay:0):'';
            frame.staticSprite[i].filters?frame.staticSprite[i].SpriteBase.filters = frame.staticSprite[i].filters:'';
            frame.staticSprite[i].SpriteBase.size(Laya.loader.getRes(frame.staticSprite[i].url).width,Laya.loader.getRes(frame.staticSprite[i].url).height)
            frame.staticSprite[i].onClick?frame.staticSprite[i].SpriteBase.on(Event.CLICK, this, frame.staticSprite[i].onClick):'';
            frame.staticSprite[i].zOrder?frame.staticSprite[i].SpriteBase.zOrder = frame.staticSprite[i].zOrder:'';
	    }
	    Laya.stage.addChild(frame.ctn);
    },
    findSpriteByName:function(frame,name)
    {
        for (var i = 0; i < frame.staticSprite.length; i++) {
            if (frame.staticSprite[i].SpriteName == name) {
                return frame.staticSprite[i].SpriteBase;
            }
        }
        return false
    },
}

var CustomLoader = {
	AssetList:[
		'./comp/custom_assets/block1.png',        
		'./comp/custom_assets/block2.png',        
		'./comp/custom_assets/block3.png',        
	],
	loaderCtn:null,
	progressSp:null,
	progressTx:null,
	preloader:function()
	{
		Laya.loader.load([
            './comp/custom_assets/piece.png',

		], Handler.create(this, CustomLoader.loader),Handler.create(this, function(){
			
		}, null, false) ,Loader.IMAGE);
	},
	loader:function()
	{
		CustomLoader.loaderCtn = new Sprite();		//创建容器

		CustomLoader.progressSp = new Sprite();		//创建进度条
		CustomLoader.progressTx = new Text();		//创建文字

		//
		CustomLoader.loaderCtn.addChild(CustomLoader.progressCenterbkg)
		CustomLoader.loaderCtn.addChild(CustomLoader.progressSp)
		CustomLoader.loaderCtn.addChild(CustomLoader.progressTx)
		

		CustomLoader.progressTx.text = "0%";
		CustomLoader.progressTx.color = "#333";
		CustomLoader.progressTx.font = "Impact";
		CustomLoader.progressTx.fontSize = 30;

		CustomLoader.progressTx.x = Laya.stage.width - CustomLoader.progressTx.width >> 1;	// ">>"  牛逼
		CustomLoader.progressTx.y = (Laya.stage.height - CustomLoader.progressTx.height >> 1)+90;
		

        Laya.stage.addChild(CustomLoader.loaderCtn);
		
		CustomLoader.progressSp.graphics.drawRect(50, Laya.stage.height/2, 0, 50, "#333")

		Laya.loader.retryNum = 0;
		Laya.loader.load(CustomLoader.AssetList, Handler.create(this, CustomLoader.onAssetLoaded), Handler.create(this, CustomLoader.onLoading, null, false), Loader.IMAGE);

		// 侦听加载失败
		Laya.loader.on(Event.ERROR, this, CustomLoader.onError);
	},
	onAssetLoaded:function()
	{	
		console.log(Laya.loader)
		setTimeout(function(){
			Tween.to(CustomLoader.loaderCtn,
			{
				alpha:0,
			},300,null,Handler.create(this,function()
			{
				Laya.stage.removeChild(CustomLoader.loaderCtn);
				gamescence.init();
			}))		
		},500)
		
	},
	onLoading:function(progress)
	{
		CustomLoader.progressSp.graphics.clear();
		CustomLoader.progressSp.graphics.drawRect(50, Laya.stage.height/2, progress*(Laya.stage.width-100), 50, "#333");		
		
		CustomLoader.progressTx.text = (parseInt(progress*100))+'%';
		
        CustomLoader.progressTx.x = Laya.stage.width - CustomLoader.progressTx.width >> 1;
		CustomLoader.progressTx.y = (Laya.stage.height - CustomLoader.progressTx.height >> 1)+90;

	},
	onError:function(err)
	{
		console.log("加载失败: " + err);
	}
}

var gamescence={
    ctn:null,
    mainbody:null,
    startPos:[0,0],
    blockgroup:null,
    targetPos:[0,0],
    targetPos_relative:[0,0],
    targetLength:0,
    score:null,
    score_num:0,
    firstBlock:null,
    secondBlock:null,
    init:function(){
        this.clearInit();   //初始化
        this.ctn = new Sprite();    //启动
        this.ctn.size(Laya.stage.width,Laya.stage.height)
        this.ctn.pivot(Laya.stage.width/2,Laya.stage.height/2);
        this.ctn.pos(Laya.stage.width/2,Laya.stage.height/2);
        Laya.stage.addChild(this.ctn);  //添加场景
        this.createBlock(); //创建方块组
        this.createMainBody();  //创建跳瓶主体

        this.score = new Text();
        this.score.color = "#333";
		this.score.fontSize = 60;
        this.score.text = this.score_num;
		this.score.pivot(this.score.width/2,this.score.height/2);
        this.score.pos(Laya.stage.width/2,Laya.stage.height/2 - 300);
        this.ctn.addChild(this.score);
    },
    clearInit(){
        this.ctn = null;
        this.mainbody = null;
        this.startPos = [Laya.stage.width/2,Laya.stage.height/2 + 100];
        this.targetPos = [0,0],
        this.targetPos_relative = [0,0],
        this.blockgroup = null;
        this.score_num = 0;
        this.score = null;
        this.firstBlock=null;
        this.secondBlock = null;
    },
    createBlock(){
        this.blockgroup = new Sprite();
        
        this.targetBoolean = Math.round(Math.random());
        this.targetLength = Math.random()*100 + 200;
        this.targetPos = [
            this.startPos[0] + (this.targetBoolean?this.targetLength:-this.targetLength),
            this.startPos[1] - this.targetLength * Math.sin(2*Math.PI/360*35)
        ];
        this.targetPos_relative = this.targetPos;
        this.blockgroup.pivot(this.startPos[0],this.startPos[1]);
        this.blockgroup.pos(this.startPos[0],this.startPos[1]);
        console.log(this.targetPos)
        //创建基底方块
        this.firstBlock = new block();
        this.firstBlock.setattr({
            x:this.startPos[0],
            y:this.startPos[1],
            zOrder:3,
        })
        this.blockgroup.addChild(this.firstBlock.sprite);

        //创建目标方块
        
        this.secondBlock = new block();
        this.secondBlock.setattr({
            x:this.targetPos[0],
            y:this.targetPos[1],
            zOrder:1,
        });
        this.blockgroup.addChild(this.secondBlock.sprite);

        this.ctn.addChild(this.blockgroup);
    },
    createNewBlock(){
        this.firstBlock = this.secondBlock;
        this.firstBlock.sprite.zOrder = 3;
        this.targetBoolean = Math.round(Math.random());
        this.targetLength = Math.random()*100 + 200;
        this.targetPos = [
            this.targetPos[0] + (this.targetBoolean?this.targetLength:-this.targetLength),
            this.targetPos[1] - this.targetLength * Math.sin(2*Math.PI/360*35)
        ];
        this.targetPos_relative = [
            this.startPos[0] + (this.targetBoolean?this.targetLength:-this.targetLength),
            this.startPos[1] - this.targetLength * Math.sin(2*Math.PI/360*35)
        ];
        this.secondBlock = new block();
        this.secondBlock.setattr({
            x:this.targetPos[0],
            y:this.targetPos[1],
            zOrder:1,
        });
        this.blockgroup.addChild(this.secondBlock.sprite);
    },
    createMainBody:function(){
        this.mainbody = new piece();
        this.mainbody.setattr({
            x:this.startPos[0],
            y:this.startPos[1],
            zOrder:4,
        })
        var count = 0,interval;
        this.ctn.on(Event.MOUSE_DOWN,this, function(e){
            // this.mainbody.jump(this);
            interval = setInterval(function(){
                count+=1.5;
            },1);
        })
        this.ctn.on(Event.MOUSE_UP,this, function(e){
            if(this.mainbody.tweening) return;
            this.mainbody.jump(this,count);
            clearInterval(interval);
            console.log(count);
            count=0;
        });
        this.ctn.addChild(this.mainbody.sprite);
    }
}

function piece() {
    this.sprite=new Sprite();
    this.texture = Loader.getRes('./comp/custom_assets/piece.png');
    //props
    this.sprite.size(this.texture.width,this.texture.height);
    this.sprite.pivot(this.texture.width/2,102);
    this.sprite.graphics.drawRect(0,0,this.width,this.height,'#333');
    this.id = 1;
    this.sprite.graphics.drawTexture(this.texture);

    //status
    this.tweening = false;

    //function set
    this.pos = function(x,y){
        this.sprite.x = this.x = x;
        this.sprite.y = this.x = y;
    }
    this.pivot = function(px,py){
        this.sprite.pivotX = this.pivotX = px;
        this.sprite.pivotY = this.pivotY = py;
    }
    this.setattr = function(newVal){
        newVal.x?this.sprite.x = newVal.x :'';
        newVal.y?this.sprite.y = newVal.y :'';
        newVal.scaleX?this.sprite.scaleX = newVal.scaleX:'';
        newVal.scaleY?this.sprite.scaleY = newVal.scaleY:'';
        newVal.alpha?this.sprite.alpha = newVal.alpha:'';
        newVal.autoSize?this.sprite.autoSize = newVal.autoSize:'';
        newVal.width?this.sprite.width = newVal.width:'';
        newVal.height?this.sprite.height = newVal.height:'';
        newVal.rotation?this.sprite.rotation = newVal.rotation:'';
        newVal.zOrder?this.sprite.zOrder = newVal.zOrder:'';
        newVal.pivotX?this.sprite.pivotX = newVal.pivotX:'';
        newVal.pivotY?this.sprite.pivotY = newVal.pivotY:'';
    }

    //function action
    this.jump = function(cont,length){
        this.tweening = true;
        this.sprite.rotation = 0;
        
        var tweentime = 300;
        Tween.to(this.sprite,{
            x:cont.startPos[0] + (cont.targetBoolean?length/2:-length/2),
            y:cont.startPos[1] - length/2 * Math.sin(2*Math.PI/360*35) -300,
            rotation:cont.targetBoolean?180:-180,
            pivotY:this.texture.height/2,
        },tweentime,Laya.Ease.linearInOut,Handler.create(this,function(){
            Tween.to(this.sprite,{
                x:cont.startPos[0] + (cont.targetBoolean?length:-length),
                y:cont.startPos[1] - length * Math.sin(2*Math.PI/360*35),
                rotation:cont.targetBoolean?360:-360,       
                pivotY:102,
            },tweentime,Laya.Ease.linearInOut,Handler.create(this,function(){
                
                if (Math.abs(cont.targetLength - length)> 50 && length > 70) {
                    Tween.to(this.sprite,{
                            x:cont.startPos[0] - (cont.targetPos_relative[0] - this.sprite.x),
                            y:cont.startPos[1] - (cont.targetPos_relative[1] - this.sprite.y),
                        },tweentime);
                    Tween.to(cont.blockgroup,{
                        pivotX:cont.targetPos[0],
                        pivotY:cont.targetPos[1],
                    },tweentime,null,Handler.create(this,function(){
                        this.sprite.rotation = 0;
                        Tween.to(this.sprite,{
                            rotation:cont.targetLength>length?(cont.targetBoolean?-90:90):(cont.targetBoolean?90:-90),
                            y:this.sprite.y + 100, 
                            alpha:0,
                            zOrder:2,
                        },tweentime,null,Handler.create(this,function(){
                            this.tweening = false;
                            this.sprite.destroy();
                            cont.ctn.destroy();
                            cont.clearInit();
                            cont.init();
                        }),tweentime);
                    }))

                    
                }else{
                    this.tweening = false;
                    if(!(length < 70)){
                        console.log(cont.targetPos_relative,[this.sprite.x,this.sprite.y]);
                        console.log('-------',cont.targetPos_relative[0] - this.sprite.x,cont.targetBoolean)
                        Tween.to(this.sprite,{
                            x:cont.startPos[0] - (cont.targetPos_relative[0] - this.sprite.x),
                            y:cont.startPos[1] - (cont.targetPos_relative[1] - this.sprite.y),
                        },tweentime);
                        Tween.to(cont.blockgroup,{
                            pivotX:cont.targetPos[0],
                            pivotY:cont.targetPos[1],
                        },tweentime,null,Handler.create(this,function(){
                            cont.createNewBlock();
                            cont.score_num++;
                            cont.score.text = cont.score_num;
                        }))
                    }
                }
            }))
        }));
        
    }
    
}

function block(blockindex,id){
    this.sprite=new Sprite();
    var randNum = (parseInt(Math.random()*3)+1);
    this.texture = Loader.getRes('./comp/custom_assets/block'+(blockindex?blockindex:randNum)+'.png');
    //props
    this.id = id?id:null;
    this.sprite.size(this.texture.width,this.texture.height)
    this.sprite.pivot(225,79);
    this.sprite.graphics.drawTexture(this.texture);

    //function set
    this.pos = function(x,y){
        this.sprite.x = this.x = x;
        this.sprite.y = this.x = y;
    }
    this.pivot = function(px,py){
        this.sprite.pivotX = this.pivotX = px;
        this.sprite.pivotY = this.pivotY = py;
    }
    this.setattr = function(newVal){
        newVal.x?this.sprite.x = newVal.x :'';
        newVal.y?this.sprite.y = newVal.y :'';
        newVal.scaleX?this.sprite.scaleX = newVal.scaleX:'';
        newVal.scaleY?this.sprite.scaleY = newVal.scaleY:'';
        newVal.alpha?this.sprite.alpha = newVal.alpha:'';
        newVal.autoSize?this.sprite.autoSize = newVal.autoSize:'';
        newVal.width?this.sprite.width = newVal.width:'';
        newVal.height?this.sprite.height = newVal.height:'';
        newVal.rotation?this.sprite.rotation = newVal.rotation:'';
        newVal.zOrder?this.sprite.zOrder = newVal.zOrder:'';
        newVal.pivotX?this.sprite.pivotX = newVal.pivotX:'';
        newVal.pivotY?this.sprite.pivotY = newVal.pivotY:'';
    }

    Object.defineProperty(this, 'attr', { 
        set: function(newVal){  
            this.setattr(newVal);
        }
    });
    
}

window.onload = function()
{      
    Laya.init(DesignProp.width, DesignProp.height, Laya.HTMLCanvas); 
    //WebGl模式 支持所有滤镜 
    //Canvas模式 仅仅支持颜色滤镜 
    Laya.stage.alignV = Stage.ALIGN_MIDDLE;
    Laya.stage.alignH = Stage.ALIGN_CENTER;
    Laya.stage.scaleMode = Stage.SCALE_FIXED_WIDTH;	//应用根据屏幕大小铺满全屏，非等比缩放会变型，stage的宽高等于设计宽高。
    Laya.stage.screenMode = Stage.SCREEN_VERTICAL;

    Laya.stage.bgColor = DesignProp.background;
    document.body.style.background = DesignProp.background;

    CustomLoader.preloader();
}