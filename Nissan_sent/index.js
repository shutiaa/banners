(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[338,602,212,192],[338,0,212,304],[338,306,212,294],[0,209,336,201],[0,0,336,207],[0,412,336,193]]}
];


// symbols:



(lib.Растровоеизображение1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение2 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение3 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.car2 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.car3 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_n = function() {
	this.initialize(img.logo_n);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,106);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AweC0IAAlnMAg9AAAIAAFng");
	mask.setTransform(105.5,18);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AgIAcQgcAAgZgRQgYgPgGgXIC3AAQgPANgFAaIgDAQg");
	this.shape.setTransform(19,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737372").s().p("AgMAIQgSgMgGgTIBJAAIgIAuQgYgCgRgNg");
	this.shape_1.setTransform(21.8,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737372").s().p("AhzAlQgnABghgWQgggWgJgfIFYABQAmAAAiAVQAhAWAIAeg");
	this.shape_2.setTransform(22.9,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737372").s().p("AgCCFIAHgmIhfAAIApjEQADgRALgGQALgIAVAAIAQAAIgqDNIAWAAIAjiuQADgRALgGQALgIAWAAIAQAAIgrDNIAMAAIgGAhQgEAQgLAGQgKAFgWAAg");
	this.shape_3.setTransform(201.9,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737372").s().p("AhRByIAojEQAEgRALgHQALgHAUAAIBNAAQgCAKgJAGQgJAGgNAAIghAAIgPBLIA9AAQgCALgJAFQgIAGgNAAIggAAIgSBWIA/AAQgGAWgbAAg");
	this.shape_4.setTransform(187,20.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737372").s().p("AALCFIAJgmIhBAAIgCALQgDAQgLAGQgKAFgXAAIgKAAIANg8IACAAQASAAAFgZIAfiVQAEgRAKgGQAMgIAUAAIBeAAIgqDNIALAAIgGAhQgDAQgLAGQgLAFgWAAgAgKA1QgDAMgJAGIgDACIAfAAIAmi3IgWAAg");
	this.shape_5.setTransform(169.4,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737372").s().p("AhaByIApjEQADgRALgHQALgHAWAAIBdAAIgpDEQgDARgLAHQgLAHgVAAgAALhYQgEADgBAEIghCjQgBAEADACQACAEAFAAQALAAACgJIAhikQAAgDgBgDQgDgEgGAAQgEAAgDADg");
	this.shape_6.setTransform(154.1,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737372").s().p("AhaByIApjEQADgRALgHQALgHAWAAIBdAAIgZB1QgDARgLAHQgLAIgVAAIglAAIgKAvQgDARgLAHQgLAHgWAAgAgMANIAJAAQALAAADgNIAQhNQABgGgDgEQgDgEgFAAIgJAAg");
	this.shape_7.setTransform(138.1,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737372").s().p("AhaByIApjEQADgRALgHQALgHAWAAIBdAAIgpDEQgDARgLAHQgLAHgWAAgAALhYQgEADgBAEIghCjQgBAEADACQACAEAFAAQALAAACgJIAhikQAAgDgBgDQgDgEgGAAQgEAAgDADg");
	this.shape_8.setTransform(121.1,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737372").s().p("AhVByIApjEQADgRALgHQALgHAVAAIBTAAQgEAWgdAAIgnAAIgjCuQgDARgLAHQgLAHgVAAg");
	this.shape_9.setTransform(107.7,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737372").s().p("AhRByIAojEQAEgRALgHQALgHAUAAIBNAAQgCAKgJAGQgJAGgNAAIghAAIgPBLIA9AAQgCALgJAFQgIAGgNAAIggAAIgSBWIA/AAQgCAKgJAGQgJAGgNAAg");
	this.shape_10.setTransform(93.9,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737372").s().p("AAmByIgGhqIgCAAIgQBLQgDARgLAHQgKAHgWAAIgQAAIAWhqIgDAAIglBQQgGAOgGAFQgKAHgXAAIgXAAIA7h1IABAAIgGhPQAAgLAHgHQAMgNAcAAIAIAAIAABjIAEAAIAOhEQADgRAKgHQALgHAWAAIAQAAIgVBjIAEAAIAchEQAHgQAIgGQAKgJAWAAIAWAAIg0BtIAAAAIAJBYQABAKgHAHQgMANgdAAg");
	this.shape_11.setTransform(74.5,20.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737372").s().p("AgIByIAXhyIgCAAIglBTQgHAQgIAGQgLAJgVAAIgXAAIAojEQAEgRALgHQALgHAVAAIAQAAIgXByIACAAIAlhTQAHgQAHgGQALgJAWAAIAXAAIgpDEQgDARgLAHQgLAHgWAAg");
	this.shape_12.setTransform(53.8,20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737372").s().p("AhqCFIAxjiQAFgUANgKQANgJAZAAIARAAIgUBiIAYAAIAMg7QAFgUANgKQANgJAZAAIATAAIgnC+QgFAVgNAJQgNAJgZAAIgSAAIAUhsIgXAAIgXBpQgFAVgNAJQgMAJgZAAg");
	this.shape_13.setTransform(34.6,22.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,211,36), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Растровоеизображение3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,212,297);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Растровоеизображение2();
	this.instance.parent = this;
	this.instance.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,212,304);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Растровоеизображение1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,192.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AgHA3IAAgQIAQAAIAAAQgAgFAZIgChPIAQAAIgDBPg");
	this.shape.setTransform(151.4,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AABAhIARghIgRggIANAAIASAgIgSAhgAgfAhIAQghIgQggIANAAIASAgIgSAhg");
	this.shape_1.setTransform(145.4,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AgRApQgLgFgGgKQgHgJAAgQQABgQAFgKQAHgKAKgFQALgFAKAAQASAAALAMQAJAKABAUIAAAIIhEAAQABAJAEAGQADAFAFACIAKAEIAJAAIALAAIAKgCIANgEIAAAPQgGACgJABQgKACgKABQgMAAgKgFgAAagGQAAgHgCgGQgDgFgFgDQgFgDgIgBQgGABgHACQgFACgFAGQgEAFgBAJIAzAAIAAAAg");
	this.shape_2.setTransform(136.1,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AAgA3IAAgXIhNAAIAAhWIAPAAIAABJIAvAAIAAhJIAPAAIAABJIAOAAIAAAkg");
	this.shape_3.setTransform(126.4,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AAkA3IAAgXIhGAAIAAAXIgPAAIAAgkIALAAQAEgDACgJQADgIACgPIAEgmIA7AAIAABJIAOAAIAAAkgAgMgNQgCAMgCAHQgCAIgEAFIArAAIAAg8IgeAAIgDAcg");
	this.shape_4.setTransform(115.4,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AgWAoQgLgEgGgLQgGgJgBgQQABgOAGgKQAGgLALgFQALgEALgBQANABAKAEQALAFAGALQAHAKAAAOQAAAQgHAJQgGALgLAEQgKAFgNABQgLgBgLgFgAgPgbQgHAFgEAHQgEAGAAAJQAAAJAEAGQADAIAHADQAHAFAJAAQALAAAHgFQAGgDAEgIQADgGAAgJQAAgJgEgGQgEgHgHgFQgHgEgJAAQgIAAgHAEg");
	this.shape_5.setTransform(105,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AgrA9IAAh3IALAAIACAIQAFgFAIgCQAIgDAJgBQANABAKAEQAKAFAFALQAGAJAAAPQAAAMgEAIQgEAIgGAGQgHAFgIADQgIADgIABQgIgBgHgCIgMgEIAAAmgAgRgsIgLAHIAAAsIALAGQAGACAIAAQAKAAAHgEQAHgEAEgHQADgGAAgKQAAgIgDgHQgEgHgHgFQgGgEgKAAQgIAAgHADg");
	this.shape_6.setTransform(94.4,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AgWAoQgLgEgGgLQgGgJgBgQQABgOAGgKQAGgLALgFQALgEALgBQANABAKAEQALAFAGALQAHAKAAAOQAAAQgHAJQgGALgLAEQgKAFgNABQgLgBgLgFgAgPgbQgHAFgEAHQgEAGAAAJQAAAJAEAGQADAIAHADQAHAFAJAAQALAAAHgFQAGgDAEgIQADgGAAgJQAAgJgEgGQgEgHgHgFQgHgEgJAAQgIAAgHAEg");
	this.shape_7.setTransform(83.2,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AgaArIAAhVIA2AAIAAAMIgoAAIAABJg");
	this.shape_8.setTransform(74.6,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AgRApQgLgFgGgKQgHgJAAgQQABgQAFgKQAHgKAKgFQAKgFALAAQASAAALAMQAKAKAAAUIAAAIIhEAAQABAJAEAGQADAFAFACIAKAEIAJAAIALAAIAKgCIANgEIAAAPQgGACgKABQgJACgKABQgLAAgLgFgAAagGQAAgHgCgGQgDgFgFgDQgFgDgIgBQgGABgHACQgFACgFAGQgEAFgBAJIAzAAIAAAAg");
	this.shape_9.setTransform(65.5,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AAvArIgOgSIgOgUIgMAAIAAAmIgNAAIAAgmIgMAAIgOAUIgOASIgTAAIAKgMIANgRIAMgQIgPgUIgSgUIAUAAIALANIAIALIAJAMIAJAAIAAgkIANAAIAAAkIAJAAIAJgMIAIgLIALgNIAUAAIgSAUIgPAUIAMAQIANARIAKAMg");
	this.shape_10.setTransform(54,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AAYArIAAhCIgxBCIgNAAIAAhVIAPAAIAAA/IAtg/IARAAIAABVg");
	this.shape_11.setTransform(42.3,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AAgA3IAAgwIg/AAIAAAwIgQAAIAAhtIAQAAIAAAwIA/AAIAAgwIAQAAIAABtg");
	this.shape_12.setTransform(31.1,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1B1B").s().p("AATAhIgSghIASggIANAAIgQAgIAQAhgAgNAhIgSghIASggIANAAIgRAgIARAhg");
	this.shape_13.setTransform(20.6,15.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1B1B").s().p("AgmArIAAhVIAoAAQAQAAAJAFQAIAGAAAKQAAAGgEAFQgEAGgGACQAJACAFAFQAEAFAAAIQAAANgJAGQgJAHgVgBgAgXAfIAYAAQAMgBAFgDQAFgDAAgHQAAgGgFgDQgFgDgLgBIgZAAgAgXgGIAZAAQAJAAAEgEQAEgCAAgHQAAgFgEgDQgEgCgJgBIgZAAg");
	this.shape_14.setTransform(7.3,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.2,27.2);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AgVAoQgMgEgFgLQgHgJAAgQQAAgPAHgKQAHgKALgFQAKgFAMAAQAWAAALAMQALAKAAAVIAAAMIhAAAQAAAGAFAEQAEADAGABIAJABQAKAAAJgCIARgDIAAAUIgRADQgKACgJABQgPgBgMgFgAATgFQABgJgFgGQgEgEgJAAQgIgBgFAFQgHAEAAALIAlAAIAAAAg");
	this.shape.setTransform(96.5,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AgwA9IAAh3IAUAAIACAFQAHgDAHgCQAHgCAGgBQANAAALAFQALAFAGAKQAGAKAAAPQAAAPgGAJQgGALgLAFQgLAGgMAAQgGAAgGgCIgMgEIAAAlgAgMgmIgKAEIAAAlIAJAEQAGACAGgBQAGABAFgDQAGgDADgEQADgGAAgJQAAgLgGgHQgHgFgJAAQgHgBgFACg");
	this.shape_1.setTransform(85.8,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AgaA5QgLgEgGgMQgGgLAAgTQAAgRACgLQADgMAHgJQAGgHANgFQANgEATgCIAKgBIAGgCIAEgCIAFAUQgDADgGACQgHACgLABQgMAAgHADQgIADgDAEQgEAGgBAIQAHgFAIgDQAIgEAJAAQATABALAJQAKALABATQgBAOgGAKQgGAKgMAEQgLAFgOABQgPgBgLgFgAgMADQgHAEgEAGQAAAPAGAHQAFAGAMAAQAKAAAHgFQAGgGAAgLQAAgKgFgFQgFgFgLAAQgHABgHADg");
	this.shape_2.setTransform(74.3,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AAWArIAAgaIgJAAIgJABIgKANIgIAMIggAAIAFgFIAJgKIAKgNQgIgDgFgHQgFgGABgJQgBgJAFgIQAEgHAKgFQAIgDAOAAIAuAAIAABVgAgKgUQgDADAAAFQAAAGADADQADACAHAAIAGAAIAJgBIAHAAIAAgUIgWAAQgGAAgEACg");
	this.shape_3.setTransform(62.8,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AgMArIAAhBIgfAAIAAgUIBXAAIAAAUIgfAAIAABBg");
	this.shape_4.setTransform(53.1,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AARArIAAggIghAAIAAAgIgaAAIAAhVIAaAAIAAAgIAhAAIAAggIAaAAIAABVg");
	this.shape_5.setTransform(42.9,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AgVAoQgMgEgFgLQgHgJAAgQQAAgPAHgKQAHgKALgFQAKgFAMAAQAWAAALAMQALAKAAAVIAAAMIhAAAQABAGADAEQAFADAFABIAKABQAKAAAJgCIARgDIAAAUIgRADQgKACgJABQgPgBgMgFgAATgFQAAgJgEgGQgEgEgJAAQgIgBgFAFQgHAEAAALIAlAAIAAAAg");
	this.shape_6.setTransform(32.4,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AgNApQgNgFgGgKQgIgKABgPQgBgPAIgKQAGgLALgFQALgEAMgBIARACIAQADIAAAWIgMgEQgHgCgJABQgHgBgGADQgFADgEAFQgEAGAAAHQAAAIAEAGQAFAFAEADQAHADAGgBQAKABAGgCIAMgCIAAAVIgPACIgOACQgOAAgLgFg");
	this.shape_7.setTransform(22.4,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AgrArIAAhVIAvAAQATgBAIAGQAIAGAAAKQAAAGgEAGQgFAGgJACIAAAAQAKABAHAFQAGAFAAAJQAAAHgDAFQgFAGgIADQgIADgOAAgAgSAXIAYAAQAGAAADgBQACgCAAgFQAAgEgCgCQgEgCgFAAIgYAAgAgSgIIAVAAQADAAADgCQADgCABgDQAAgEgDgCQgDgCgEAAIgVAAg");
	this.shape_8.setTransform(8.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,0,102.5,27.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C71444").s().p("AgYArIgUgCIAAhUIAaAAIAAAeIAPgEIALgCQATABAIAIQAJAIAAANQAAALgDAHQgFAIgKAEQgJADgRAAIgYgBgAgJACIgJADIAAARIAJACIAKABQAKgBADgDQAEgDAAgGQAAgFgEgDQgDgDgIAAIgMABg");
	this.shape.setTransform(135.8,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C71444").s().p("AgMArIAAhBIgfAAIAAgUIBXAAIAAAUIgfAAIAABBg");
	this.shape_1.setTransform(125.5,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C71444").s().p("AARArIAAg0IghA0IgaAAIAAhVIAaAAIAAAwIAfgwIAcAAIAABVg");
	this.shape_2.setTransform(115.3,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C71444").s().p("AASArIAAhBIgkAAIAABBIgZAAIAAhVIBXAAIAABVg");
	this.shape_3.setTransform(104.5,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C71444").s().p("AggA8IAKgRIAKgRIgOgaIgMgbIgJgVIgEgLIAcAAIADAKIAHAQIAHATIAGAQIAMgcIAMghIAcAAIgEAKIgIATIgKAXIgMAYIgNAZIgLASg");
	this.shape_4.setTransform(93.9,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C71444").s().p("AAQArIgLgPIgPgSIgLAAIAAAhIgZAAIAAhVIAZAAIAAAgIAJAAIAMgSIALgOIAgAAIgSAUIgRAVIAMAMIANANIAJANIAFAGg");
	this.shape_5.setTransform(84.3,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C71444").s().p("AgVAoQgLgEgHgLQgGgJAAgQQAAgPAHgKQAHgKAKgFQALgFAMAAQAWAAALAMQALAKAAAVIAAAMIhAAAQABAGADAEQAFADAFABIAKABQAJAAAKgCIAQgDIAAAUIgQADQgKACgKABQgOgBgMgFgAATgFQAAgJgEgGQgEgEgJAAQgIgBgGAFQgFAEgBALIAlAAIAAAAg");
	this.shape_6.setTransform(69.2,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C71444").s().p("AgMArIAAhBIgfAAIAAgUIBXAAIAAAUIgfAAIAABBg");
	this.shape_7.setTransform(59.2,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C71444").s().p("AARA+IAAg1IghA1IgaAAIAAhWIAaAAIAAAwIAfgwIAcAAIAABWgAgVgrQgHgGgBgMIAUAAQABAFACADQADACADAAQAFAAADgCQADgCACgGIAPAAQgCAMgHAGQgIAGgMAAQgNAAgHgGg");
	this.shape_8.setTransform(49,13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C71444").s().p("AgVAoQgLgEgHgLQgGgJAAgQQAAgPAHgKQAHgKAKgFQALgFANAAQAVAAALAMQALAKAAAVIAAAMIhAAAQABAGADAEQAFADAFABIAKABQAKAAAJgCIAQgDIAAAUIgRADQgJACgKABQgOgBgMgFgAAUgFQgBgJgEgGQgEgEgIAAQgJgBgGAFQgFAEgBALIAmAAIAAAAg");
	this.shape_9.setTransform(38.5,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C71444").s().p("AATArIAAhBIgkAAIAABBIgaAAIAAhVIBXAAIAABVg");
	this.shape_10.setTransform(27.8,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C71444").s().p("AgOApQgMgFgHgKQgGgKgBgPQABgPAGgKQAHgLALgFQAMgEAMgBIARACIAOADIAAAWIgMgEQgGgCgJABQgIgBgFADQgFADgEAFQgEAGAAAHQABAIAEAGQAEAFAEADQAHADAGgBQAKABAGgCIALgCIAAAVIgOACIgOACQgOAAgMgFg");
	this.shape_11.setTransform(17.5,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C71444").s().p("AgmA3IANgSIANgTQgNgRgJgPQgJgPgFgLIgHgOIAdAAIAEAIIAHAOIAIAPIAHANIAIgNIAHgPIAHgOIAEgIIAeAAIghA7QgQAbgQAXg");
	this.shape_12.setTransform(7.5,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.8,27.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AABAEIgFAKIgFgCIAHgKIgMABIAAgFIANABIgIgKIAFgCIAFAKIAEgKIAFACIgHAKIAMgBIAAAFIgMgBIAHAKIgFACg");
	this.shape.setTransform(166.4,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AABAEIgFAKIgFgCIAHgKIgMABIAAgFIAMABIgHgKIAFgCIAFAKIAEgKIAGACIgIAKIAMgBIAAAFIgLgBIAHAKIgGACg");
	this.shape_1.setTransform(162.5,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AATApIgQgRIgRgSIgJAAIAAAjIgPAAIAAhRIAPAAIAAAiIAGAAIAKgLIAKgKIAOgNIAUAAIgWAUIgTASIALAKIANANIALAMIAIAIg");
	this.shape_2.setTransform(156.6,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AgUAmQgLgEgGgKQgFgJgBgPQABgNAFgKQAGgJALgFQAKgFAKAAQAMAAAKAFQAKAFAGAJQAGAKAAANQAAAPgGAJQgGAKgKAEQgKAFgMAAQgKAAgKgFgAgNgZQgHAEgEAGQgDAHAAAIQAAAIACAHQAEAGAGAEQAGAFAJgBQAKABAHgFQAGgEADgGQADgHAAgIQAAgIgEgHQgDgGgHgEQgHgEgIABQgHgBgGAEg");
	this.shape_3.setTransform(146.4,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AgpA6IAAhxIALAAIACAHQAEgDAIgDQAIgCAIgBQAMAAAJAFQAKAFAFAJQAGAKAAANQAAALgEAHQgEAJgGAFQgGAGgHACQgIADgHAAQgIAAgHgCQgGgCgFgDIAAAlgAgQgpQgGADgEAEIAAApIAKAFQAGACAIAAQAJAAAGgDQAHgEADgHQAEgGAAgJQAAgIgEgGQgDgHgGgEQgHgEgIAAQgJAAgGADg");
	this.shape_4.setTransform(136.4,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AgVAoQgHgDgFgGQgEgHAAgIQAAgKAFgGQAFgFAIgDQAIgDAJABQAGAAAHABIANAEIAAgEQAAgIgEgEQgDgEgHgCQgGgCgFABQgIgBgHACIgQAEIAAgOIAQgEIAQgBQAMAAAJAEQAIADAFAIQAEAHAAANIAAAwIgLAAIgCgHQgFAEgIACQgIADgJAAQgIAAgIgDgAgLACQgFABgDAEQgDADAAAGQAAAFADADQADADAFABQAEACAFAAQAGAAAFgCIAJgDIAGgEIAAgOQgGgDgIgCIgKgBQgHAAgEABg");
	this.shape_5.setTransform(126.1,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AAhA0IAAgWIhBAAIAAAWIgOAAIAAgjIAKAAQADgCADgJQADgHACgOIADgkIA3AAIAABEIAOAAIAAAjgAgMgMQgBALgCAHQgDAHgDAEIApAAIAAg3IgcAAIgEAag");
	this.shape_6.setTransform(116.7,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AgUAmQgLgEgGgKQgFgJgBgPQABgNAFgKQAGgJALgFQAKgFAKAAQAMAAAKAFQAKAFAGAJQAGAKAAANQAAAPgGAJQgGAKgKAEQgKAFgMAAQgKAAgKgFgAgNgZQgHAEgEAGQgDAHgBAIQAAAIADAHQAEAGAGAEQAGAFAJgBQAKABAGgFQAHgEADgGQADgHAAgIQAAgIgEgHQgDgGgHgEQgHgEgIABQgHgBgGAEg");
	this.shape_7.setTransform(106.8,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AAXApIAAhFIgtAAIAABFIgPAAIAAhRIBLAAIAABRg");
	this.shape_8.setTransform(96.7,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AgkApIAAhRIAmAAQAPAAAIAFQAIAGAAAKQAAAGgDAEQgEAFgGADIAAAAQAJACAEAFQAEAEAAAHQAAAMgIAGQgJAGgTAAgAgWAcIAYAAQAKAAAFgCQAFgEAAgFQAAgGgFgDQgFgDgKAAIgYAAgAgWgGIAYAAQAIAAAEgDQAEgDAAgFQAAgFgEgDQgEgDgIAAIgYAAg");
	this.shape_9.setTransform(83.3,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AgdAvQgMgHgHgMQgGgLgBgRQABgPAGgMQAHgNAMgGQANgHARAAQARAAAMAHQAMAHAHAMQAGAMABAPQgBARgGALQgIANgMAGQgMAHgQAAQgRAAgNgHgAgUgiQgIAEgFAIQgGAJAAANQAAANAGAIQAFAJAIAFQAKAFALgBQALABAJgFQAJgFAEgJQAGgIAAgNQAAgMgGgJQgEgJgJgEQgJgFgLAAQgLAAgKAFg");
	this.shape_10.setTransform(68.1,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AAYA0IgUgWIgXgWIgKAAIAAAsIgOAAIAAhnIAOAAIAAAuIAJAAIAUgXIAXgXIAVAAIgcAaIgXAZIASARIARASIAQARg");
	this.shape_11.setTransform(57.2,13.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AgIAzQgKgDgJgGQgJgHgGgJQgFgKAAgPQAAgNAFgLQAFgKAIgHQAJgHALgDQAKgDANAAIAMABIAMACIAKAEIAAAPQgIgEgJgCQgJgCgJAAQgNAAgJAFQgKAEgGAJQgGAJAAANQAAALAEAHQAEAHAHAFQAGAEAJADQAHACAIAAIAMgBIAKgCIAMgEIAAAOQgFADgIACQgJACgNAAQgLAAgKgDg");
	this.shape_12.setTransform(45.8,13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1B1B").s().p("AAmA0IgEgNIgFgOIg4AAIgGAPIgDAMIgRAAIANgiIANgfIAMgXIAHgPIARAAIAGALIALAXIANAeQAIASAHAVgAAXALIgIgRIgHgRIgHgOIgHAOIgIARIgIARIAtAAIAAAAg");
	this.shape_13.setTransform(34.9,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1B1B").s().p("AAYA0IgUgWIgXgWIgKAAIAAAsIgPAAIAAhnIAPAAIAAAuIAJAAIAUgXIAXgXIAVAAIgcAaIgXAZIASARIARASIAQARg");
	this.shape_14.setTransform(25,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.2,0,153.2,25.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C71444").s().p("AAAAFIgEAMIgIgEIAJgLIgNADIAAgJIANADIgJgLIAIgFIAEAMIAFgMIAIAGIgIAKIAMgDIAAAJIgMgDIAIALIgIAEg");
	this.shape.setTransform(198,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C71444").s().p("AgrA6IAAgPIgNAAIAAgUIANAAIAAgIIgNAAIAAgUIANAAIAAg1IAzAAQAOABALACQALAEAGAIQAHAIAAAOQAAALgEAHQgFAHgHAEQgHAEgIACIgRABIgYAAIAAAIIATAAIAAAUIgTAAIAAAPgAgPgFIAXAAQAFAAAFgBQAEgBADgEQADgDAAgHQAAgHgGgDQgGgDgJAAIgWAAg");
	this.shape_1.setTransform(189.6,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_2.setTransform(173.4,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_3.setTransform(161,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_4.setTransform(148.6,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_5.setTransform(131.8,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C71444").s().p("AgZA6IgUgEIAAgYIAVAEIARACQAMAAAHgEQAGgFAAgIQAAgGgFgEQgGgEgMAAIgTABIgTADIAFhEIBMAAIAAAYIg1AAIgBAVIAHgCIAKAAQAOAAALAEQAKAFAFAIQAFAHAAAMQAAALgFAJQgGAJgMAGQgLAEgRAAIgUgBg");
	this.shape_6.setTransform(120.2,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C71444").s().p("AgGA7IgNAAIgNgCIgOgDIAAgYIAVAFIASABQALAAAHgEQAHgFABgIQAAgHgFgEQgEgEgIgBQgIgCgNAAIgBAAIAAgJIAcgbIg1AAIAAgYIBZAAIAAATIgbAbQAHABAHAFQAHAEAEAGQAFAHAAAJQAAAPgHAJQgHAJgMAEQgLAEgMAAIgEgBg");
	this.shape_7.setTransform(109.2,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C71444").s().p("AgbArQgLgFgHgLQgHgLAAgQQAAgPAHgKQAHgLALgGQAMgFAQAAQAPAAAMAFQALAGAIALQAGAKAAAPQAAAQgGALQgIAKgLAGQgMAFgPAAQgQAAgMgFgAgRgSQgGAHAAALQgBAMAIAHQAGAHALAAQAHAAAFgDQAGgEADgGQADgGAAgHQgBgLgGgHQgHgHgLAAQgKAAgHAHg");
	this.shape_8.setTransform(93.2,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C71444").s().p("AAdA+IAAgfIg5AAIAAAfIgbAAIAAg2IAMAAQAFgFADgRQADgRABgeIBIAAIAABFIAPAAIAAA2gAgLgJQgDAKgEAHIAgAAIAAgvIgVAAQgCATgCALg");
	this.shape_9.setTransform(81.9,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C71444").s().p("AgdAsQgIgEgFgHQgEgHAAgIQAAgIAEgGQADgFAGgDQAFgDAHgCIAOgBIALABQAIABAIADIAAgEQAAgJgIgEQgHgEgNAAQgIAAgIACIgOAEIAAgXIAKgCIAOgCIAOAAQANAAALADQALAEAGAIQAGAJAAAOIAAA3IgVAAIgDgIIgHAEIgLAFQgGABgIAAQgMAAgIgEgAgOAKQgEADAAAFQAAAFAEADQAFACAIAAQAGAAAFgCIAKgEIAAgLIgJgDIgMgBQgJAAgEADg");
	this.shape_10.setTransform(66.1,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C71444").s().p("AAeA+IAAgfIg7AAIAAAfIgaAAIAAg2IAMAAQAFgFADgRQADgRACgeIBHAAIAABFIAPAAIAAA2gAgLgJQgDAKgEAHIAgAAIAAgvIgUAAQgDATgCALg");
	this.shape_11.setTransform(55.3,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C71444").s().p("AgaArQgMgFgHgLQgGgLgBgQQABgPAGgKQAHgLAMgGQAMgFAOAAQAQAAAMAFQAMAGAGALQAHAKAAAPQAAAQgHALQgGAKgMAGQgMAFgQAAQgOAAgMgFgAgRgSQgHAHAAALQABAMAGAHQAHAHALAAQAHAAAGgDQAFgEADgGQADgGAAgHQgBgLgGgHQgHgHgLAAQgKAAgHAHg");
	this.shape_12.setTransform(43.7,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C71444").s().p("AghAuIAAhbIBDAAIAAAWIgoAAIAABFg");
	this.shape_13.setTransform(34.1,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C71444").s().p("AguAuIgUgCIAAhaIAbAAIAAAgIAQgEIAMgCQARABAKAIQAJAJAAAOQABARgLAJQgLAJgYAAQgPAAgLgBgAgdACIgKADIAAATIAKABIAKABQAKAAAEgEQAEgDgBgGQAAgGgDgDQgEgDgIAAQgGAAgGABgAAoAtIAAhbIAbAAIAABbg");
	this.shape_14.setTransform(21.6,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C71444").s().p("Ag0A6IAAh0IAwAAIASABQAJACAIADQAHADAFAHQAEAFABAJQAAAIgGAHQgEAIgLADIAAABIAMAEQAGADAEAFQAEAGAAAHQAAALgFAGQgFAIgGADQgIAEgJABIgSABgAgYAkIAaAAQALAAAFgDQAFgDAAgHQAAgGgCgDQgDgDgGgBIgMgBIgYAAgAgYgKIAVAAIAKgBQAFgBADgCQADgDAAgGQAAgFgDgDQgDgCgFgBIgJgBIgWAAg");
	this.shape_15.setTransform(7.7,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,203.2,28.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AgMA9IAAhWIAZAAIAABWgAgNgmIAAgWIAcAAIAAAWg");
	this.shape.setTransform(190.1,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AgcApQgHgDgFgHQgDgGAAgJQAAgHACgFQAEgEAFgDQAGgEAGgBIANgCIALABQAGABAJADIAAgEQAAgIgIgEQgHgEgLABQgIAAgIABIgNADIAAgUIAKgCIAMgCIAOgBQAMABAKADQALADAFAIQAGAIABANIAAA0IgVAAIgCgHIgHAEIgLAEQgFACgIAAQgLgBgIgEgAgOAKQgDACAAAFQAAAEAEADQAEACAIAAQAFAAAGgCIAJgDIAAgLIgJgDIgLgBQgIAAgFAEg");
	this.shape_1.setTransform(182.1,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AAXA9IAAgmIgLAEQgHACgHAAQgMAAgKgFQgLgGgGgKQgGgJgBgPQABgPAGgKQAGgKALgFQALgFAMAAQAIAAAHADQAIACAGAEIACgGIATAAIAAB3gAgOgiQgHAHAAALQAAAJADAGQAEAEAFADQAFACAHAAQAGAAAEgCIAKgFIAAgjIgKgEQgFgBgGAAQgKAAgGAFg");
	this.shape_2.setTransform(171,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AAUA7IAAgzQAAgIgDgEQgEgEgIAAQgHAAgHACIgKAGIAAA7IgaAAIAAh1IAaAAIAAAmQAGgEAJgCQAHgDAKAAQAKAAAHADQAIADAEAIQAEAHAAAMIAAA3g");
	this.shape_3.setTransform(159.9,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AgQAsIgMgCIgKgCIAAgVIAJADIAMABIAOACIALgBQAEgBACgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgIgDIgSgEQgJgCgGgDQgFgEgCgEQgBgGAAgFQgBgKAGgFQAGgHAJgCQAKgDALAAQALAAAIACQAJABAFADIAAAUIgRgEIgOgBIgHAAIgIACQgEABAAADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAKACIARAFQAOACAFAGQAGAGABAKQAAAIgFAGQgEAHgKAEQgKAEgPAAIgNgCg");
	this.shape_4.setTransform(149.6,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AgcApQgHgDgFgHQgDgGAAgJQAAgHACgFQAEgEAFgDQAGgEAGgBIANgCIALABQAGABAJADIAAgEQAAgIgIgEQgHgEgLABQgJAAgHABIgNADIAAgUIAKgCIAMgCIAOgBQAMABAKADQALADAFAIQAGAIABANIAAA0IgVAAIgCgHIgHAEIgLAEQgFACgIAAQgLgBgIgEgAgOAKQgDACAAAFQAAAEAEADQAEACAIAAQAFAAAGgCIAJgDIAAgLIgJgDIgLgBQgIAAgFAEg");
	this.shape_5.setTransform(139.4,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AATAuIgJACIgKAAQgLAAgLgDQgKgDgJgHQgIgHgEgLQgGgLAAgPQAAgPAGgKQAFgLAIgHQAJgHAKgDQALgEAKAAQALAAAKAEQALADAIAHQAJAHAFALQAGALgBAOQABAOgFALQgEAKgJAIIAPAQIgTAQgAAPAWQAHgEAFgHQAFgJAAgLQAAgKgEgIQgFgHgHgEQgHgEgJAAQgIAAgHAEQgIAEgDAHQgFAIAAAKQAAALAFAJQAFAHAHAEQAHADAHAAQAIAAAHgDg");
	this.shape_6.setTransform(127.6,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AAUAsIAAgxQAAgJgDgEQgEgFgIABQgHAAgHACIgKAGIAAA6IgaAAIAAhVIAVAAIADAJIAJgGIAMgEQAGgCAHAAQAKABAHADQAIACAEAIQAEAIAAANIAAA1g");
	this.shape_7.setTransform(111.1,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AgcApQgIgDgEgHQgDgGAAgJQAAgHADgFQADgEAGgDQAEgEAHgBIANgCIALABQAHABAIADIAAgEQgBgIgGgEQgIgEgLABQgJAAgGABIgPADIAAgUIAKgCIAOgCIANgBQAMABALADQAJADAHAIQAFAIAAANIAAA0IgUAAIgCgHIgHAEIgLAEQgFACgIAAQgLgBgIgEgAgNAKQgEACAAAFQAAAEAEADQAEACAIAAQAFAAAGgCIAJgDIAAgLIgJgDIgMgBQgHAAgEAEg");
	this.shape_8.setTransform(99.9,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AgPAsIgNgCIgKgCIAAgVIAJADIANABIAMACIALgBQAFgBABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgJgDIgSgEQgJgCgGgDQgFgEgCgEQgBgGgBgFQABgKAFgFQAGgHAJgCQAKgDAMAAQAKAAAIACQAJABAFADIAAAUIgQgEIgPgBIgIAAIgHACQgDABAAADQgBABAAAAQABABAAAAQAAABABAAQAAAAABABIAKACIARAFQAOACAFAGQAHAGgBAKQAAAIgEAGQgEAHgKAEQgKAEgPAAIgMgCg");
	this.shape_9.setTransform(90.1,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AgQAsIgMgCIgKgCIAAgVIAJADIAMABIAOACIAKgBQAFgBACgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgIgDIgSgEQgJgCgGgDQgFgEgCgEQgCgGABgFQgBgKAGgFQAFgHAKgCQAKgDAMAAQAKAAAIACQAIABAGADIAAAUIgRgEIgOgBIgHAAIgIACQgDABAAADQgBABAAAAQABABAAAAQAAABABAAQAAAAABABIAKACIARAFQAOACAFAGQAHAGAAAKQgBAIgEAGQgEAHgKAEQgKAEgPAAIgNgCg");
	this.shape_10.setTransform(80.8,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AgMA9IAAhWIAYAAIAABWgAgOgmIAAgWIAdAAIAAAWg");
	this.shape_11.setTransform(73.8,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AAZA3IgyhJIAABJIgaAAIAAhtIAfAAIAuBEIAAhEIAaAAIAABtg");
	this.shape_12.setTransform(65,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1B1B").s().p("AARA+IAAg1IghA1IgaAAIAAhWIAaAAIAAAwIAfgwIAcAAIAABWgAgVgrQgHgGgBgMIAUAAQABAFACADQADACADAAQAFAAADgCQADgCACgGIAPAAQgCAMgHAGQgIAGgMAAQgNAAgHgGg");
	this.shape_13.setTransform(49.1,13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1B1B").s().p("AgrArIgTgCIAAhUIAaAAIAAAeIAPgEIALgCQAQABAJAIQAJAIAAANQAAAQgKAJQgKAIgXAAIgYgBgAgbACIgKADIAAARIAKACIAKABQAIgBAEgDQAEgDAAgGQAAgFgEgDQgDgDgIAAIgLABgAAmArIAAhWIAZAAIAABWg");
	this.shape_14.setTransform(36.3,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1B1B").s().p("AgrArIAAhVIAvAAQATgBAHAGQAJAGAAAKQAAAGgEAGQgEAGgKACIAAAAQALABAGAFQAGAFAAAJQAAAHgEAFQgEAGgHADQgJADgOAAgAgRAXIAXAAQAFAAADgBQADgCAAgFQAAgEgDgCQgCgCgGAAIgXAAgAgRgIIAUAAQAEAAADgCQACgCAAgDQABgEgDgCQgDgCgEAAIgUAAg");
	this.shape_15.setTransform(24.1,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C1B1B").s().p("AgZAoQgMgEgFgLQgHgKAAgPQAAgOAHgKQAFgLAMgFQALgEAOgBQAPABALAEQALAGAGAKQAHAKAAAOQAAAPgHAKQgGAKgLAFQgLAFgPABQgOgBgLgFgAgQgRQgGAGAAALQAAALAGAGQAHAHAJAAQAHAAAGgDQAEgDAEgFQACgGAAgHQAAgLgHgGQgGgGgKAAQgKAAgGAGg");
	this.shape_16.setTransform(13,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C1B1B").s().p("AAYA3IAAgrIgvAAIAAArIgbAAIAAhtIAbAAIAAAtIAvAAIAAgtIAbAAIAABtg");
	this.shape_17.setTransform(1.1,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,0,201.8,27.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AgCAVIAAgiIgQAAIAAgHIAlAAIAAAHIgPAAIAAAig");
	this.shape.setTransform(134.3,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AgCAUQgEgDgDgEQgDgEgBgGIgHAAIAAASIgIAAIAAgpIAIAAIAAARIAIAAQAAgFADgEQADgEAEgDQAEgCAFAAQAGABAEACQAGACACAFQADAFAAAGQAAAHgDAFQgCAFgGACQgEACgGABQgFAAgEgCgAAAgMIgDAFQgCAEAAADQAAAEABADQABADADADQACACAFAAQAFAAADgCQADgDABgDQACgDAAgEQAAgDgCgEQgBgDgEgCQgDgCgEABQgDgBgEACg");
	this.shape_1.setTransform(129,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AgKAUQgEgCgCgDQgBgDgBgEQABgFACgDQACgCAEgBIAIgBIAHAAIAGACIAAgCQAAgEgCgCQgBgDgDAAQgDgBgDABIgIAAIgHACIAAgHIAIgCIAHgBQAGABAEABQAFACACAEQACAEAAAGIAAAYIgFAAIgBgEIgHADQgEABgDABQgFgBgEgBgAgFABIgEADIgBADQAAABAAABQAAABAAAAQABABAAAAQAAABAAAAIAEACIAFABIAFgBIAEgBIADgCIAAgHQgDgCgDgBIgGgBIgFABg");
	this.shape_2.setTransform(123,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AAZAaIAAgLIg3AAIAAgoIAHAAIAAAiIARAAIAAgiIAGAAIAAAiIASAAIAAgiIAHAAIAAAiIAGAAIAAARg");
	this.shape_3.setTransform(117.5,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AALAVIAAggIgWAgIgGAAIAAgpIAHAAIAAAdIAUgdIAIAAIAAApg");
	this.shape_4.setTransform(111.4,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AAMAVIgLgPIgMAPIgJAAIAQgVIgRgUIAJAAIAMARIAMgRIAJAAIgQAUIAQAVg");
	this.shape_5.setTransform(106.9,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AgGATQgFgCgEgFQgCgFAAgHQAAgGACgFQAEgEAFgDQAFgCAFgBIAFABIAFAAIAEACIAAAHIgHgCIgGAAQgEgBgDACQgDACgDADQgCADAAAEQAAAEACADQACADAEADQACACAFAAIAFgBIAEAAIAFgCIAAAHIgFACIgEAAIgGABQgFgBgFgCg");
	this.shape_6.setTransform(102.6,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AgKATQgFgCgDgFQgDgFAAgHQAAgGADgFQADgFAFgCQAFgCAFgBQAGABAFACQAFACADAFQADAFAAAGQAAAHgDAFQgDAFgFACQgFACgGABQgFgBgFgCgAgHgMIgEAFQgCAEAAADQAAAEABADIAFAGQADABAEAAQAFAAADgBQADgDACgDQABgDABgEQAAgDgCgEQgCgDgEgCQgCgCgFABQgDgBgEACg");
	this.shape_7.setTransform(97.8,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AgRAVIAAgpIASAAQAIAAADADQAFADAAAEQAAADgDADQgBADgDABQAFABACACQACACAAADQgBAHgEACQgEAEgKAAgAgKAOIALAAQAFAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgCgBQgDgCgFAAIgLAAgAgKgDIALAAQAEAAACgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgEABIgLAAg");
	this.shape_8.setTransform(93,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AgHAUQgFgDgDgEQgEgFAAgIQAAgHADgFQADgEAFgDQAFgCAFAAQAIABAFAFQAFAFAAAJIAAAEIgfAAQAAAEACACIAEAEIAEABIAEABIAFgBIAFAAIAGgCIAAAGIgHADIgKABQgEAAgFgCgAAMgDIgBgFIgEgEQgCgCgEABIgFABQgDABgCACQgCADAAADIAXAAIAAAAg");
	this.shape_9.setTransform(86.2,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AgPAUIgKgBIAAgnIAHAAIAAAQIAGgDIAHAAQAHAAAFADQAEAEAAAGQAAAIgEADQgGAEgIAAIgIgBgAgMAAIgGABIAAAMIAGACIAFAAQAGgBACgCQADgCAAgEQAAgDgDgCQgCgBgFAAIgGAAgAATAUIAAgoIAHAAIAAAog");
	this.shape_10.setTransform(80.7,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AgUAdIAAg4IAGAAIABAEIAFgDQAEgCAEAAQAGAAAFADQAFACACAFQACAFABAGIgCAJIgFAHIgHADQgEACgDAAIgHgBIgGgCIAAASgAgIgUIgFAEIAAATIAFADIAHACQAEgBADgCQAEgCACgDQABgDAAgDQAAgFgBgDQgCgDgEgDQgCgCgFAAQgDABgEABg");
	this.shape_11.setTransform(75.1,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AgKATQgFgCgDgFQgDgFAAgHQAAgGADgFQADgFAFgCQAFgCAFgBQAGABAFACQAFACADAFQADAFAAAGQAAAHgDAFQgDAFgFACQgFACgGABQgFgBgFgCgAgHgMIgEAFQgCAEgBADQAAAEACADIAFAGQADABAEAAQAFAAAEgBQACgDACgDQACgDAAgEQAAgDgDgEQgBgDgDgCQgDgCgFABQgDgBgEACg");
	this.shape_12.setTransform(69.8,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1B1B").s().p("AgCAVIAAgiIgQAAIAAgHIAlAAIAAAHIgPAAIAAAig");
	this.shape_13.setTransform(65.1,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1B1B").s().p("AgKATQgFgCgDgFQgDgFAAgHQAAgGADgFQADgFAFgCQAFgCAFgBQAGABAFACQAFACADAFQADAFAAAGQAAAHgDAFQgDAFgFACQgFACgGABQgFgBgFgCgAgHgMIgEAFQgCAEAAADQAAAEABADIAFAGQADABAEAAQAFAAADgBQADgDACgDQABgDABgEQAAgDgCgEQgCgDgDgCQgDgCgFABQgDgBgEACg");
	this.shape_14.setTransform(60.5,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1B1B").s().p("AAKAVIgIgJIgIgJIgFAAIAAASIgHAAIAAgpIAHAAIAAARIADAAIAFgFIAFgFIAHgHIAKAAIgMAKIgIAJIAFAGIAGAGIAFAFIAEAFg");
	this.shape_15.setTransform(56,8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C1B1B").s().p("AgGAJIAFgRIAIAAIgHARg");
	this.shape_16.setTransform(50.6,10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C1B1B").s().p("AALAVIAAggIgWAgIgGAAIAAgpIAHAAIAAAdIAUgdIAIAAIAAApg");
	this.shape_17.setTransform(47.5,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C1B1B").s().p("AALAVIAAggIgWAgIgGAAIAAgpIAHAAIAAAdIAUgdIAIAAIAAApg");
	this.shape_18.setTransform(42.6,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C1B1B").s().p("AAPAaIAAgLIgkAAIAAgoIAHAAIAAAiIAWAAIAAgiIAHAAIAAAiIAHAAIAAARg");
	this.shape_19.setTransform(38,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1C1B1B").s().p("AgJAUQgFgCgCgDQgCgDAAgEQAAgFADgDQACgCAEgBIAJgBIAFAAIAHACIAAgCQAAgEgCgCQgBgDgEAAQgDgBgCABIgHAAIgIACIAAgHIAIgCIAHgBQAHABADABQAFACACAEQACAEAAAGIAAAYIgFAAIgBgEIgHADQgDABgEABQgFgBgDgBgAgFABIgEADIgBADQAAABAAABQAAABAAAAQABABAAAAQAAABABAAIADACIAFABIAEgBIAFgBIADgCIAAgHQgDgCgEgBIgFgBIgFABg");
	this.shape_20.setTransform(32.7,8.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C1B1B").s().p("AgSAVIAAgpIATAAQAHAAAFADQADADAAAEQAAADgBADQgCADgDABQAEABACACQACACAAADQABAHgFACQgEAEgKAAgAgKAOIALAAQAFAAACgBQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgDgBQgCgCgFAAIgLAAgAgKgDIALAAQAEAAACgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgEABIgLAAg");
	this.shape_21.setTransform(28.2,8.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1C1B1B").s().p("AgKATQgFgCgDgFQgDgFAAgHQAAgGADgFQADgFAFgCQAFgCAFgBQAGABAFACQAFACADAFQADAFAAAGQAAAHgDAFQgDAFgFACQgFACgGABQgFgBgFgCgAgGgMIgGAFQgCAEAAADQABAEABADIAFAGQADABAEAAQAFAAAEgBQADgDABgDQABgDAAgEQAAgDgCgEQgBgDgDgCQgDgCgFABQgDgBgDACg");
	this.shape_22.setTransform(23.2,8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C1B1B").s().p("AALAVIAAgSIgVAAIAAASIgHAAIAAgpIAHAAIAAARIAVAAIAAgRIAHAAIAAApg");
	this.shape_23.setTransform(18.2,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C1B1B").s().p("AALAVIAAgSIgVAAIAAASIgHAAIAAgpIAHAAIAAARIAVAAIAAgRIAHAAIAAApg");
	this.shape_24.setTransform(13.3,8.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C1B1B").s().p("AAPAaIAAgpIgeApIgGAAIAAgzIAHAAIAAAoIAcgoIAJAAIAAAzg");
	this.shape_25.setTransform(8,7.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C1B1B").s().p("AAAADIgDAIIgDgCIAFgHIgKABIAAgFIAKABIgFgHIADgCIADAIIAEgIIAEACIgFAHIAJgBIAAAFIgJgCIAFAIIgEACg");
	this.shape_26.setTransform(3.6,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.5,14.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.car1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,201);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.car3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,193);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AAAAEIgEAKIgFgCIAHgKIgMABIAAgFIANABIgIgKIAFgCIAEAKIAFgKIAFACIgHAKIAMgBIAAAFIgLgBIAGAKIgFACg");
	this.shape.setTransform(170.3,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AABAEIgFAKIgFgCIAHgKIgMABIAAgFIANABIgIgKIAFgCIAFAKIAEgKIAFACIgHAKIAMgBIAAAFIgMgBIAHAKIgFACg");
	this.shape_1.setTransform(166.4,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AABAEIgFAKIgFgCIAHgKIgMABIAAgFIAMABIgHgKIAFgCIAFAKIAEgKIAGACIgIAKIAMgBIAAAFIgLgBIAHAKIgGACg");
	this.shape_2.setTransform(162.5,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AAAAEIgEAKIgFgCIAHgKIgMABIAAgFIANABIgIgKIAFgCIAEAKIAFgKIAFACIgHAKIAMgBIAAAFIgLgBIAGAKIgFACg");
	this.shape_3.setTransform(158.6,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AATApIgQgRIgRgSIgJAAIAAAjIgPAAIAAhRIAPAAIAAAiIAGAAIAKgLIAKgKIAOgNIAUAAIgWAUIgTASIALAKIANANIALAMIAIAIg");
	this.shape_4.setTransform(152.7,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AgVAmQgJgEgGgKQgHgJAAgPQAAgNAHgKQAGgJAJgFQAKgFALAAQAMAAAKAFQAKAFAGAJQAGAKAAANQAAAPgGAJQgGAKgKAEQgKAFgMAAQgLAAgKgFgAgOgZQgGAEgEAGQgEAHABAIQAAAIACAHQADAGAHAEQAGAFAKgBQAJABAHgFQAGgEADgGQADgHAAgIQAAgIgDgHQgFgGgGgEQgGgEgJABQgHgBgHAEg");
	this.shape_5.setTransform(142.5,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AgpA6IAAhxIALAAIACAHQAEgDAIgDQAIgCAIgBQAMAAAJAFQAKAFAFAJQAGAKAAANQAAALgEAHQgEAJgGAFQgGAGgHACQgIADgHAAQgIAAgHgCQgGgCgFgDIAAAlgAgQgpQgGADgEAEIAAApIAKAFQAGACAIAAQAJAAAGgDQAHgEADgHQAEgGAAgJQAAgIgEgGQgDgHgGgEQgHgEgIAAQgJAAgGADg");
	this.shape_6.setTransform(132.5,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AgVAoQgHgDgFgGQgEgHAAgIQAAgKAFgGQAFgFAIgDQAIgDAIABQAHAAAHABIAMAEIAAgEQABgIgEgEQgEgEgFgCQgHgCgGABQgHgBgHACIgQAEIAAgOIARgEIAPgBQANAAAIAEQAIADAEAIQAFAHAAANIAAAwIgLAAIgCgHQgFAEgIACQgIADgJAAQgJAAgHgDgAgMACQgEABgDAEQgCADgBAGQABAFACADQADADAEABQAFACAFAAQAFAAAGgCIAJgDIAFgEIAAgOQgGgDgGgCIgLgBQgGAAgGABg");
	this.shape_7.setTransform(122.2,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AAhA0IAAgWIhBAAIAAAWIgOAAIAAgjIAKAAQADgCADgJQADgHABgOIAFgkIA2AAIAABEIAOAAIAAAjgAgLgMQgCALgDAHQgCAHgCAEIAnAAIAAg3IgcAAIgCAag");
	this.shape_8.setTransform(112.8,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AgVAmQgJgEgGgKQgHgJAAgPQAAgNAHgKQAGgJAJgFQAKgFALAAQAMAAAKAFQAKAFAGAJQAGAKAAANQAAAPgGAJQgGAKgKAEQgKAFgMAAQgLAAgKgFgAgOgZQgGAEgEAGQgEAHABAIQAAAIACAHQADAGAHAEQAGAFAKgBQAJABAHgFQAGgEADgGQADgHAAgIQAAgIgDgHQgFgGgGgEQgGgEgJABQgHgBgHAEg");
	this.shape_9.setTransform(102.9,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AAXApIAAhFIgtAAIAABFIgPAAIAAhRIBLAAIAABRg");
	this.shape_10.setTransform(92.8,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AgkApIAAhRIAmAAQAQAAAHAFQAIAGAAAKQAAAGgEAEQgDAFgGADIAAAAQAJACAEAFQAEAEAAAHQAAAMgJAGQgIAGgUAAgAgVAcIAWAAQALAAAFgCQAFgEAAgFQAAgGgFgDQgFgDgLAAIgWAAgAgVgGIAWAAQAKAAADgDQAEgDAAgFQAAgFgEgDQgEgDgJAAIgWAAg");
	this.shape_11.setTransform(79.4,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AgcAvQgNgHgGgMQgIgLAAgRQAAgPAIgMQAGgNANgGQAMgHAQAAQASAAANAHQAMAHAGAMQAGAMAAAPQAAARgGALQgIANgMAGQgMAHgRAAQgPAAgNgHgAgUgiQgJAEgFAIQgEAJAAANQAAANAEAIQAFAJAJAFQAJAFALgBQAMABAJgFQAJgFAEgJQAFgIABgNQgBgMgFgJQgEgJgJgEQgJgFgMAAQgLAAgJAFg");
	this.shape_12.setTransform(64.2,13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1B1B").s().p("AAYA0IgUgWIgXgWIgJAAIAAAsIgQAAIAAhnIAQAAIAAAuIAIAAIAUgXIAXgXIAVAAIgcAaIgXAZIASARIARASIAQARg");
	this.shape_13.setTransform(53.3,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1B1B").s().p("AgIAzQgKgDgJgGQgJgHgGgJQgFgKAAgPQAAgNAFgLQAFgKAIgHQAJgHALgDQAKgDANAAIAMABIAMACIAKAEIAAAPQgIgEgJgCQgJgCgJAAQgNAAgJAFQgKAEgGAJQgGAJAAANQAAALAEAHQAEAHAHAFQAGAEAJADQAHACAIAAIAMgBIAKgCIAMgEIAAAOQgFADgIACQgJACgNAAQgLAAgKgDg");
	this.shape_14.setTransform(41.9,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1B1B").s().p("AAmA0IgEgNIgFgOIg4AAIgFAPIgFAMIgQAAIANgiIANgfIAMgXIAHgPIARAAIAGALIALAXIAOAeQAHASAHAVgAAXALIgIgRIgHgRIgIgOIgGAOIgIARIgHARIAsAAIAAAAg");
	this.shape_15.setTransform(31,13.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C1B1B").s().p("AAYA0IgVgWIgVgWIgKAAIAAAsIgQAAIAAhnIAQAAIAAAuIAIAAIAUgXIAXgXIAVAAIgbAaIgYAZIASARIARASIARARg");
	this.shape_16.setTransform(21.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,0,161,25.8);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C71444").s().p("AAAAFIgEAMIgIgEIAJgLIgNADIAAgJIANADIgJgLIAIgFIAEAMIAFgMIAIAGIgIAKIAMgDIAAAJIgMgDIAIALIgIAEg");
	this.shape.setTransform(193,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C71444").s().p("AAAAFIgEAMIgIgEIAJgLIgNADIAAgJIANADIgJgLIAIgFIAEAMIAFgMIAIAGIgIAKIAMgDIAAAJIgMgDIAIALIgIAEg");
	this.shape_1.setTransform(188.7,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C71444").s().p("AgrA6IAAgPIgNAAIAAgUIANAAIAAgIIgNAAIAAgUIANAAIAAg1IAzAAQAOABALACQALAEAGAIQAHAIAAAOQAAALgEAHQgFAHgHAEQgHAEgIACIgRABIgYAAIAAAIIATAAIAAAUIgTAAIAAAPgAgPgFIAXAAQAFAAAFgBQAEgBADgEQADgDAAgHQAAgHgGgDQgGgDgJAAIgWAAg");
	this.shape_2.setTransform(180.3,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_3.setTransform(164.1,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_4.setTransform(151.7,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_5.setTransform(139.3,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_6.setTransform(122.6,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C71444").s().p("AgnA8IAAgYQAKABAKgBQAKAAAJgEQAJgDAIgJIgCABIgIADQgEABgHAAQgPAAgKgFQgKgGgGgJQgEgJAAgMQAAgOAFgJQAGgKALgFQAMgGAPAAQANAAAMAFQAMAGAGALQAIALAAASQgBANgEANQgFANgLAKQgLAKgRAGQgOAFgUAAIgHgBgAgMgiQgFADgCAFQgDAFABAFQgBAFADAFQACAEAFACQAFADAHAAQAKAAAGgEQAGgFAAgLQAAgJgGgGQgFgFgLAAQgHAAgFADg");
	this.shape_7.setTransform(110.5,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C71444").s().p("AguA7IAAgYQAVgKAOgLQAOgJAHgIQAIgIAAgHQAAgHgDgEQgDgDgFgBQgGgCgGAAIgQACQgKABgJACIAAgXQAJgCAMgCQALgCALABQALAAAKADQAKAFAGAJQAHAIgBAOQABAMgHAIQgGAJgMAJQgMAJgOAIIAwAAIAAAXg");
	this.shape_8.setTransform(99.3,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C71444").s().p("AADA7IAAhZIggAFIAAgWIA7gLIAAB1g");
	this.shape_9.setTransform(84.7,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C71444").s().p("AgNAuIAAhGIghAAIAAgVIBdAAIAAAVIgiAAIAABGg");
	this.shape_10.setTransform(71.9,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C71444").s().p("AgaArQgMgFgHgLQgGgLgBgQQABgPAGgKQAHgLAMgGQALgFAQAAQAPAAAMAFQALAGAIALQAGAKAAAPQAAAQgGALQgIAKgLAGQgMAFgPAAQgQAAgLgFgAgRgSQgGAHAAALQgBAMAIAHQAGAHALAAQAHAAAFgDQAGgEADgGQADgGAAgHQAAgLgHgHQgHgHgLAAQgKAAgHAHg");
	this.shape_11.setTransform(60.9,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C71444").s().p("AgdAsQgIgEgFgHQgEgHAAgIQAAgIAEgGQADgFAGgDQAFgDAHgCIAOgBIALABQAIABAIADIAAgEQAAgJgIgEQgHgEgNAAQgIAAgIACIgOAEIAAgXIAKgCIAOgCIAOAAQANAAALADQALAEAGAIQAGAJAAAOIAAA3IgVAAIgDgIIgHAEIgLAFQgGABgIAAQgMAAgIgEgAgOAKQgEADAAAFQAAAFAEADQAFACAIAAQAGAAAFgCIAKgEIAAgLIgJgDIgMgBQgJAAgEADg");
	this.shape_12.setTransform(44.8,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C71444").s().p("AASAuIAAgjIgjAAIAAAjIgbAAIAAhbIAbAAIAAAjIAjAAIAAgjIAbAAIAABbg");
	this.shape_13.setTransform(33.6,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C71444").s().p("AgWArQgMgFgHgLQgHgLAAgQQAAgQAHgKQAIgLALgFQAMgFAMAAQAXAAAMAMQAMALAAAWIAAAMIhFAAQABAHAEAEQAFADAGACIAKABQAKAAAKgCIASgEIAAAVIgSAEQgKACgKAAQgQAAgMgFgAAVgGQAAgJgFgGQgFgFgJAAQgJAAgGAFQgGAFgBAKIApAAIAAAAg");
	this.shape_14.setTransform(22.5,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C71444").s().p("AAgBKIAAgfIhaAAIAAh0IAcAAIAABdIAvAAIAAhdIAcAAIAABdIAOAAIAAA2g");
	this.shape_15.setTransform(10.9,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0,195.5,28.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.car2();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-10.1,1.098,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-10.1,369,227.4);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AgMA7IAAh1IAZAAIAAB1g");
	this.shape.setTransform(190,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AgMA9IAAhWIAYAAIAABWgAgOgmIAAgWIAcAAIAAAWg");
	this.shape_1.setTransform(185.3,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AgcApQgIgDgEgHQgDgGAAgJQAAgHADgFQADgEAGgDQAEgEAHgBIANgCIALABQAHABAIADIAAgEQgBgIgGgEQgIgEgLABQgJAAgGABIgPADIAAgUIAKgCIAOgCIANgBQAMABALADQAJADAHAIQAFAIAAANIAAA0IgUAAIgCgHIgHAEIgLAEQgFACgIAAQgLgBgIgEgAgNAKQgEACAAAFQAAAEAEADQAEACAIAAQAFAAAGgCIAJgDIAAgLIgJgDIgMgBQgHAAgEAEg");
	this.shape_2.setTransform(177.3,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AgcAsIAAhVIAVAAIACAJQAGgFAIgDQAJgDALgBIAAAZQgKAAgIACQgJADgFADIAAA3g");
	this.shape_3.setTransform(168.9,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AgMA3IAAhXIglAAIAAgWIBiAAIAAAWIgkAAIAABXg");
	this.shape_4.setTransform(159.6,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AggAMIAAgXIBBAAIAAAXg");
	this.shape_5.setTransform(150.4,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AAaA3IgagkIgaAkIggAAIAqg3Igpg2IAhAAIAYAkIAYgkIAhAAIgoA2IAqA3g");
	this.shape_6.setTransform(140.9,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AAUAsIAAgxQAAgJgDgEQgEgFgIABQgHAAgHACIgKAGIAAA6IgaAAIAAhVIAVAAIADAJIAJgGIAMgEQAGgCAHAAQAKABAHADQAIACAEAIQAEAIAAANIAAA1g");
	this.shape_7.setTransform(125.6,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AgcApQgIgDgEgHQgDgGAAgJQAAgHACgFQAEgEAGgDQAEgEAHgBIANgCIALABQAGABAJADIAAgEQgBgIgGgEQgIgEgLABQgIAAgIABIgOADIAAgUIALgCIAMgCIAOgBQAMABAKADQAKADAHAIQAFAIABANIAAA0IgVAAIgCgHIgHAEIgLAEQgFACgIAAQgLgBgIgEgAgOAKQgDACAAAFQAAAEAEADQAEACAIAAQAFAAAGgCIAJgDIAAgLIgJgDIgMgBQgHAAgFAEg");
	this.shape_8.setTransform(114.4,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AgPAsIgNgCIgKgCIAAgVIAJADIANABIAMACIAMgBQAEgBABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgJgDIgSgEQgJgCgGgDQgFgEgCgEQgBgGgBgFQABgKAFgFQAGgHAJgCQAKgDALAAQALAAAIACQAIABAGADIAAAUIgQgEIgPgBIgIAAIgHACQgDABgBADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAKACIARAFQANACAHAGQAFAGAAAKQABAIgFAGQgEAHgKAEQgKAEgPAAIgMgCg");
	this.shape_9.setTransform(104.6,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AgPAsIgNgCIgKgCIAAgVIAJADIAMABIAOACIAKgBQAFgBACgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgJgDIgSgEQgJgCgGgDQgFgEgCgEQgCgGABgFQAAgKAFgFQAFgHAKgCQAKgDAMAAQAKAAAIACQAIABAGADIAAAUIgRgEIgOgBIgHAAIgIACQgEABABADQgBABAAAAQABABAAAAQAAABABAAQAAAAABABIAKACIARAFQAOACAFAGQAHAGAAAKQgBAIgEAGQgEAHgKAEQgKAEgPAAIgMgCg");
	this.shape_10.setTransform(95.3,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AgMA9IAAhWIAYAAIAABWgAgOgmIAAgWIAdAAIAAAWg");
	this.shape_11.setTransform(88.3,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AAZA3IgyhJIAABJIgaAAIAAhtIAfAAIAuBEIAAhEIAaAAIAABtg");
	this.shape_12.setTransform(79.5,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1B1B").s().p("AARA+IAAg1IghA1IgaAAIAAhWIAaAAIAAAwIAfgwIAcAAIAABWgAgVgrQgHgGgBgMIAUAAQABAFACADQADACADAAQAFAAADgCQADgCACgGIAPAAQgCAMgHAGQgIAGgMAAQgNAAgHgGg");
	this.shape_13.setTransform(63.6,13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1B1B").s().p("AgrArIgTgCIAAhUIAaAAIAAAeIAPgEIALgCQAQABAJAIQAJAIAAANQAAAQgKAJQgKAIgXAAIgYgBgAgbACIgKADIAAARIAKACIAKABQAIgBAEgDQAEgDAAgGQAAgFgEgDQgDgDgIAAIgLABgAAmArIAAhWIAZAAIAABWg");
	this.shape_14.setTransform(50.8,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1B1B").s().p("AgrArIAAhVIAvAAQATgBAHAGQAJAGAAAKQAAAGgEAGQgEAGgLACIAAAAQALABAHAFQAGAFAAAJQAAAHgEAFQgDAGgJADQgIADgOAAgAgRAXIAXAAQAFAAADgBQADgCAAgFQAAgEgDgCQgDgCgEAAIgYAAgAgRgIIAUAAQAEAAADgCQACgCAAgDQABgEgDgCQgDgCgEAAIgUAAg");
	this.shape_15.setTransform(38.6,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C1B1B").s().p("AgZAoQgMgEgFgLQgHgKAAgPQAAgOAHgKQAFgLAMgFQALgEAOgBQAPABALAEQALAGAGAKQAHAKAAAOQAAAPgHAKQgGAKgLAFQgLAFgPABQgOgBgLgFgAgQgRQgGAGAAALQAAALAGAGQAHAHAKAAQAHAAAFgDQAFgDADgFQACgGAAgHQAAgLgHgGQgGgGgKAAQgKAAgGAGg");
	this.shape_16.setTransform(27.5,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C1B1B").s().p("AAYA3IAAgrIgvAAIAAArIgbAAIAAhtIAbAAIAAAtIAvAAIAAgtIAbAAIAABtg");
	this.shape_17.setTransform(15.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,0,187.3,27.2);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C71444").s().p("AAAAFIgEAMIgIgEIAJgLIgNADIAAgJIANADIgJgLIAIgFIAEAMIAFgMIAIAGIgIAKIAMgDIAAAJIgMgDIAIALIgIAEg");
	this.shape.setTransform(185.9,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C71444").s().p("AAAAFIgEAMIgIgEIAJgLIgNADIAAgJIANADIgJgLIAIgFIAEAMIAFgMIAIAGIgIAKIAMgDIAAAJIgMgDIAIALIgIAEg");
	this.shape_1.setTransform(181.6,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C71444").s().p("AAAAFIgEAMIgIgEIAJgLIgNADIAAgJIANADIgJgLIAIgFIAEAMIAFgMIAIAGIgIAKIAMgDIAAAJIgMgDIAIALIgIAEg");
	this.shape_2.setTransform(177.4,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C71444").s().p("AgrA6IAAgPIgNAAIAAgUIANAAIAAgIIgNAAIAAgUIANAAIAAg1IAzAAQAOABALACQALAEAGAIQAHAIAAAOQAAALgEAHQgFAHgHAEQgHAEgIACIgRABIgYAAIAAAIIATAAIAAAUIgTAAIAAAPgAgPgFIAXAAQAFAAAFgBQAEgBADgEQADgDAAgHQAAgHgGgDQgGgDgJAAIgWAAg");
	this.shape_3.setTransform(169,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_4.setTransform(152.8,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_5.setTransform(140.4,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_6.setTransform(128,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C71444").s().p("AgdA1QgMgHgGgOQgGgNAAgSQAAgTAGgNQAGgOALgHQAMgIASABQARgBANAIQAMAHAGAOQAGANAAATQAAASgGANQgHAOgMAHQgNAIgQgBQgRABgMgIgAgSgbQgHAKAAASQAAANADAIQAEAIAGAEQAFAEAHAAQAGAAAGgFQAGgDAEgIQAEgIAAgNQAAgMgEgJQgDgIgGgEQgGgFgHAAQgMAAgGAKg");
	this.shape_7.setTransform(111.2,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C71444").s().p("AgnA8IAAgYQAJABALgBQAKAAAJgEQAKgDAHgJIgCABIgHADQgFABgHAAQgPAAgKgFQgKgGgGgJQgEgJAAgMQAAgOAFgJQAHgKAKgFQALgGAQAAQAOAAALAFQAMAGAGALQAIALAAASQgBANgEANQgFANgLAKQgLAKgRAGQgOAFgUAAIgHgBgAgMgiQgFADgCAFQgCAFAAAFQAAAFACAFQACAEAFACQAFADAHAAQAKAAAGgEQAGgFAAgLQAAgJgGgGQgFgFgLAAQgHAAgFADg");
	this.shape_8.setTransform(99.2,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C71444").s().p("AgYA4QgMgGgHgLQgGgMAAgRQAAgNAEgNQAFgOALgJQAKgKASgGQAQgFAaABIAAAZQgKgCgLABQgKAAgKAEQgIAEgJAIIAEgCIAHgCQAFgBAGAAQAPgBAKAGQAKAGAFAJQAGAJAAAMQgBAOgFAJQgGAKgMAFQgKAGgQgBIgBABQgNAAgLgFgAgPACQgGAFAAAKQAAAKAFAFQAGAFAKABQAIAAAFgEQAFgDADgEQACgFAAgFQAAgFgCgFQgDgFgFgCQgFgDgIAAQgJABgGAEg");
	this.shape_9.setTransform(87.6,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C71444").s().p("AgNAuIAAhGIghAAIAAgVIBdAAIAAAVIgiAAIAABGg");
	this.shape_10.setTransform(72.3,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C71444").s().p("AgaArQgMgFgHgLQgGgLgBgQQABgPAGgKQAHgLAMgGQALgFAQAAQAPAAAMAFQALAGAIALQAGAKAAAPQAAAQgGALQgIAKgLAGQgMAFgPAAQgQAAgLgFgAgRgSQgGAHAAALQgBAMAIAHQAGAHALAAQAHAAAFgDQAGgEADgGQADgGAAgHQAAgLgHgHQgHgHgLAAQgKAAgHAHg");
	this.shape_11.setTransform(61.3,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C71444").s().p("AgdAsQgIgEgFgHQgEgHAAgIQAAgIAEgGQADgFAGgDQAFgDAHgCIAOgBIALABQAIABAIADIAAgEQAAgJgIgEQgHgEgNAAQgIAAgIACIgOAEIAAgXIAKgCIAOgCIAOAAQANAAALADQALAEAGAIQAGAJAAAOIAAA3IgVAAIgDgIIgHAEIgLAFQgGABgIAAQgMAAgIgEgAgOAKQgEADAAAFQAAAFAEADQAFACAIAAQAGAAAFgCIAKgEIAAgLIgJgDIgMgBQgJAAgEADg");
	this.shape_12.setTransform(45.2,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C71444").s().p("AASAuIAAgjIgjAAIAAAjIgbAAIAAhbIAbAAIAAAjIAjAAIAAgjIAbAAIAABbg");
	this.shape_13.setTransform(34.1,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C71444").s().p("AgWArQgMgFgHgLQgHgLAAgQQAAgQAHgKQAIgLALgFQAMgFAMAAQAXAAAMAMQAMALAAAWIAAAMIhFAAQABAHAEAEQAFADAGACIAKABQAKAAAKgCIASgEIAAAVIgSAEQgKACgKAAQgQAAgMgFgAAVgGQAAgJgFgGQgFgFgJAAQgJAAgGAFQgGAFgBAKIApAAIAAAAg");
	this.shape_14.setTransform(22.9,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C71444").s().p("AAgBKIAAgfIhaAAIAAh0IAcAAIAABdIAvAAIAAhdIAcAAIAABdIAOAAIAAA2g");
	this.shape_15.setTransform(11.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,0,188,28.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AgZAoQgLgEgHgLQgGgKAAgPQAAgOAGgKQAHgLALgFQALgEAOgBQAPABALAEQALAGAGAKQAHAKAAAOQAAAPgHAKQgGAKgLAFQgLAFgPABQgOgBgLgFgAgQgRQgGAGAAALQgBALAHAGQAGAHAKAAQAHAAAGgDQAEgDADgFQADgGAAgHQAAgLgHgGQgGgGgKAAQgKAAgGAGg");
	this.shape.setTransform(127.5,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AAUAsIAAgxQAAgJgDgEQgEgFgIABQgHAAgHACIgKAGIAAA6IgaAAIAAhVIAVAAIADAJIAJgGIAMgEQAGgCAHAAQAKABAHADQAIACAEAIQAEAIAAANIAAA1g");
	this.shape_1.setTransform(116.2,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AgcApQgHgDgEgHQgFgGAAgJQAAgHAEgFQADgEAGgDQAFgEAGgBIANgCIALABQAHABAHADIAAgEQABgIgIgEQgHgEgMABQgHAAgHABIgPADIAAgUIAKgCIAOgCIANgBQAMABALADQAJADAGAIQAGAIAAANIAAA0IgUAAIgCgHIgHAEIgLAEQgFACgIAAQgLgBgIgEgAgNAKQgEACAAAFQAAAEAEADQAEACAIAAQAFAAAFgCIAJgDIAAgLIgIgDIgLgBQgJAAgDAEg");
	this.shape_2.setTransform(105,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AgcAsIAAhVIAVAAIACAJQAGgFAIgDQAJgDALgBIAAAZQgKAAgIACQgJADgFADIAAA3g");
	this.shape_3.setTransform(96.6,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AgcAsIAAhVIAVAAIACAJQAGgFAIgDQAJgDALgBIAAAZQgKAAgIACQgJADgFADIAAA3g");
	this.shape_4.setTransform(89.4,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AgVAoQgMgEgFgLQgHgJAAgQQAAgPAHgKQAHgKALgFQAKgFAMAAQAWAAALAMQALAKAAAVIAAAMIhAAAQAAAGAEAEQAFADAGABIAJABQAKAAAJgCIARgDIAAAUIgRADQgKACgJABQgPgBgMgFgAATgFQABgJgFgGQgEgEgJAAQgIgBgFAFQgHAEAAALIAlAAIAAAAg");
	this.shape_5.setTransform(80.2,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AgMA3IAAhXIgkAAIAAgWIBiAAIAAAWIglAAIAABXg");
	this.shape_6.setTransform(69.7,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AAUAsIAAgxQAAgJgDgEQgEgFgIABQgHAAgHACIgKAGIAAA6IgaAAIAAhVIAVAAIADAJIAJgGIAMgEQAGgCAHAAQAKABAHADQAIACAEAIQAEAIAAANIAAA1g");
	this.shape_7.setTransform(54.6,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AgcApQgHgDgEgHQgFgGAAgJQAAgHAEgFQADgEAGgDQAFgEAGgBIANgCIALABQAHABAHADIAAgEQABgIgIgEQgHgEgMABQgHAAgHABIgPADIAAgUIAKgCIAOgCIANgBQAMABALADQAJADAGAIQAGAIAAANIAAA0IgUAAIgCgHIgHAEIgLAEQgFACgIAAQgLgBgIgEgAgNAKQgEACAAAFQAAAEAEADQAEACAIAAQAFAAAFgCIAJgDIAAgLIgIgDIgLgBQgJAAgDAEg");
	this.shape_8.setTransform(43.4,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AgQAsIgMgCIgKgCIAAgVIAJADIAMABIAOACIAKgBQAFgBACgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgIgDIgSgEQgJgCgGgDQgFgEgCgEQgCgGABgFQgBgKAGgFQAFgHAKgCQAKgDAMAAQAKAAAIACQAIABAGADIAAAUIgRgEIgOgBIgHAAIgIACQgDABAAADQgBABAAAAQABABAAAAQAAABABAAQAAAAABABIAKACIARAFQAOACAFAGQAHAGAAAKQgBAIgEAGQgEAHgKAEQgKAEgPAAIgNgCg");
	this.shape_9.setTransform(33.6,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AgQAsIgMgCIgKgCIAAgVIAJADIAMABIANACIAMgBQAEgBABgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgBgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgIgDIgSgEQgKgCgFgDQgFgEgCgEQgCgGAAgFQAAgKAGgFQAGgHAJgCQAKgDALAAQALAAAIACQAIABAGADIAAAUIgQgEIgPgBIgIAAIgHACQgDABgBADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAKACIARAFQANACAHAGQAFAGAAAKQABAIgFAGQgEAHgKAEQgKAEgPAAIgNgCg");
	this.shape_10.setTransform(24.3,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AgMA9IAAhWIAYAAIAABWgAgNgmIAAgWIAbAAIAAAWg");
	this.shape_11.setTransform(17.2,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AAZA3IgyhJIAABJIgaAAIAAhtIAfAAIAuBEIAAhEIAaAAIAABtg");
	this.shape_12.setTransform(8.4,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.2,27.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1B1B").s().p("AgQAmQgJgDgHgKQgGgJgBgQQABgOAGgKQAGgJAKgEQAJgFAKAAQARABAKAJQAJALAAATIAAAIIg/AAQABAHADAFQAEAFAEADQAEACAFABIAIAAIALAAIAKgCIAMgDIAAANIgPAEQgJACgJAAQgLAAgKgFgAAZgGQgBgHgCgEQgCgFgFgEQgFgCgHAAQgGgBgFADQgHADgDAEQgFAFAAAIIAwAAIAAAAg");
	this.shape.setTransform(203.7,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B1B").s().p("AAeA0IAAgWIhIAAIAAhRIAOAAIAABEIAsAAIAAhEIAOAAIAABEIAOAAIAAAjg");
	this.shape_1.setTransform(194.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1B1B").s().p("AAhA0IAAgWIhBAAIAAAWIgOAAIAAgjIAKAAQADgCADgJQADgHABgOIAFgkIA2AAIAABEIAOAAIAAAjgAgLgMQgCALgDAHQgCAHgCAEIAnAAIAAg3IgcAAIgCAag");
	this.shape_2.setTransform(184.3,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1B1B").s().p("AgVAmQgJgEgGgKQgHgJAAgPQAAgNAHgKQAGgJAJgFQAKgFALAAQAMAAAKAFQAKAFAGAJQAGAKAAANQAAAPgGAJQgGAKgKAEQgKAFgMAAQgLAAgKgFgAgOgZQgGAEgEAGQgEAHABAIQAAAIACAHQADAGAHAEQAGAFAKgBQAJABAHgFQAGgEADgGQADgHAAgIQAAgIgDgHQgFgGgGgEQgGgEgJABQgHgBgHAEg");
	this.shape_3.setTransform(174.5,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B1B").s().p("AgpA6IAAhxIALAAIACAHQAEgDAIgDQAIgCAIgBQAMAAAJAFQAKAFAFAJQAGAKAAANQAAALgEAHQgEAJgGAFQgGAGgHACQgIADgHAAQgIAAgHgCQgGgCgFgDIAAAlgAgQgpQgGADgEAEIAAApIAKAFQAGACAIAAQAJAAAGgDQAHgEADgHQAEgGAAgJQAAgIgEgGQgDgHgGgEQgHgEgIAAQgJAAgGADg");
	this.shape_4.setTransform(164.5,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C1B1B").s().p("AgUAmQgLgEgFgKQgHgJAAgPQAAgNAHgKQAFgJALgFQAJgFALAAQAMAAAKAFQAKAFAGAJQAGAKAAANQAAAPgGAJQgGAKgKAEQgKAFgMAAQgLAAgJgFgAgOgZQgGAEgEAGQgDAHAAAIQAAAIACAHQADAGAHAEQAGAFAJgBQAKABAHgFQAGgEADgGQADgHAAgIQAAgIgDgHQgEgGgHgEQgHgEgIABQgHgBgHAEg");
	this.shape_5.setTransform(154,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C1B1B").s().p("AgZApIAAhRIAzAAIAAAMIgkAAIAABFg");
	this.shape_6.setTransform(145.9,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1B1B").s().p("AgQAmQgJgDgHgKQgGgJgBgQQABgOAGgKQAGgJAKgEQAJgFAKAAQARABAKAJQAKALAAATIAAAIIhAAAQABAHADAFQADAFAFADQAFACAEABIAIAAIALAAIAKgCIAMgDIAAANIgPAEQgJACgJAAQgLAAgKgFgAAZgGQAAgHgDgEQgCgFgFgEQgFgCgHAAQgGgBgFADQgGADgFAEQgEAFAAAIIAwAAIAAAAg");
	this.shape_7.setTransform(137.4,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1B1B").s().p("AAsApIgNgRIgNgSIgLAAIAAAjIgMAAIAAgjIgLAAIgOASIgMARIgSAAIAJgMIALgQIAMgOIgOgTIgRgUIATAAIAJANIAJAKIAIALIAJAAIAAgiIAMAAIAAAiIAIAAIAIgLIAJgKIAKgNIASAAIgRAUIgOATIAMAOIAMAQIAIAMg");
	this.shape_8.setTransform(126.6,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1B1B").s().p("AAXApIAAg/IguA/IgNAAIAAhRIAPAAIAAA7IAqg7IAPAAIAABRg");
	this.shape_9.setTransform(115.6,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1B1B").s().p("AAdA0IAAgtIg6AAIAAAtIgPAAIAAhnIAPAAIAAAtIA6AAIAAgtIAQAAIAABng");
	this.shape_10.setTransform(105,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C1B1B").s().p("AgkApIAAhRIAmAAQAPAAAIAFQAIAGAAAKQAAAGgDAEQgEAFgGADIAAAAQAJACAEAFQAEAEAAAHQAAAMgJAGQgIAGgUAAgAgVAcIAWAAQALAAAFgCQAFgEAAgFQAAgGgFgDQgFgDgLAAIgWAAgAgVgGIAWAAQAKAAADgDQAEgDAAgFQAAgFgEgDQgEgDgJAAIgWAAg");
	this.shape_11.setTransform(90.7,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AAWApIAAg/IgtA/IgNAAIAAhRIAOAAIAAA7IArg7IAQAAIAABRg");
	this.shape_12.setTransform(77,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1C1B1B").s().p("AAWApIAAg/IgtA/IgMAAIAAhRIANAAIAAA7IArg7IAQAAIAABRg");
	this.shape_13.setTransform(67.3,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1C1B1B").s().p("AAVApIAAgfQgFAEgHADQgHAEgHgBQgKAAgGgDQgHgDgDgHQgDgIgBgNIAAgaIAPAAIAAAaQAAAMAEAEQADAGAKgBQAHAAAFgDQAHgDAFgDIAAgmIAPAAIAABRg");
	this.shape_14.setTransform(57.7,14.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1B1B").s().p("AAWApIAAg/IgtA/IgMAAIAAhRIANAAIAAA7IArg7IAQAAIAABRg");
	this.shape_15.setTransform(48.5,14.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1C1B1B").s().p("AgjAqIgCAAIAAgNIABAAIABAAQAFABAEgHQAEgHACgQQACgOACgbIA2AAIAABRIgOAAIAAhEIgaAAQgCAUgDAOQgDAOgDAHQgDAJgGADQgFADgHAAIgBAAg");
	this.shape_16.setTransform(38.6,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C1B1B").s().p("AgVAoQgHgDgFgGQgEgHAAgIQAAgKAFgGQAFgFAIgDQAHgDAKABQAGAAAHABIANAEIAAgEQgBgIgDgEQgDgEgHgCQgGgCgFABQgIgBgHACIgQAEIAAgOIAQgEIAQgBQAMAAAJAEQAJADAEAIQAEAHAAANIAAAwIgLAAIgCgHQgFAEgIACQgIADgIAAQgJAAgIgDgAgLACQgFABgDAEQgDADAAAGQAAAFADADQADADAFABQAEACAFAAQAGAAAEgCIAJgDIAHgEIAAgOQgHgDgHgCIgLgBQgFAAgFABg");
	this.shape_17.setTransform(29.9,14.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C1B1B").s().p("AAWApIAAgjIgrAAIAAAjIgOAAIAAhRIAOAAIAAAiIArAAIAAgiIAPAAIAABRg");
	this.shape_18.setTransform(20.4,14.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C1B1B").s().p("AgkApIAAhRIAmAAQAPAAAIAFQAIAGAAAKQAAAGgDAEQgEAFgGADIAAAAQAJACAEAFQAEAEAAAHQAAAMgJAGQgIAGgUAAgAgVAcIAWAAQALAAAFgCQAFgEAAgFQAAgGgFgDQgFgDgLAAIgWAAgAgVgGIAWAAQAKAAADgDQAEgDAAgFQAAgFgEgDQgEgDgJAAIgWAAg");
	this.shape_19.setTransform(7,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.5,25.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61645").s().p("AAXAyIAAg4QAAgJgFgFQgDgFgJAAQgJAAgHADIgLAGIAABCIgdAAIAAhhIAXAAIADAKIALgFIANgFQAGgCAJAAQALAAAHAEQAJADAFAJQAEAIAAAPIAAA8g");
	this.shape.setTransform(188,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61645").s().p("AgfAuQgIgEgFgHQgFgIAAgJQAAgIAEgGQAEgFAGgDQAGgEAHgCIAOgBIANABQAHABAJADIAAgEQAAgKgIgEQgIgEgNAAQgJABgIABIgQAEIAAgYIAMgCIAOgBIAPgBQAOAAALADQAMAEAGAJQAHAJAAAPIAAA7IgXAAIgCgJIgIAEIgMAFIgPACQgMAAgJgFgAgPAKQgEADAAAGQAAAFAEADQAFACAJABQAGgBAGgCIAKgEIAAgLIgKgEIgMgBQgJAAgFADg");
	this.shape_1.setTransform(175.4,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61645").s().p("AgRAyIgOgCIgLgEIAAgXIAKADIAOACIAOABIANgBQAEAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIgBgDQgBgBgDgBIgKgDIgUgFQgLgBgFgFQgGgDgCgGQgCgFAAgGQAAgLAGgHQAGgGALgDQALgDANAAQAMAAAJACIAPAEIAAAXQgKgDgIgCIgQgCIgJABIgIACQgEACAAADQgBADADABIAMADIATAEQAPAEAHAFQAHAIgBAKQABAKgFAHQgFAHgLAEQgLAFgRAAIgOgBg");
	this.shape_2.setTransform(164.5,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61645").s().p("AgRAyIgOgCIgLgEIAAgXIAKADIAOACIAOABIANgBQAEAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBIgBgDQgBgBgDgBIgKgDIgUgFQgLgBgFgFQgGgDgCgGQgCgFAAgGQAAgLAGgHQAGgGALgDQALgDANAAQAMAAAJACIAPAEIAAAXQgKgDgIgCIgQgCIgJABIgIACQgEACAAADQgBADADABIAMADIATAEQAPAEAHAFQAHAIgBAKQABAKgFAHQgFAHgLAEQgLAFgRAAIgOgBg");
	this.shape_3.setTransform(154.1,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61645").s().p("AgNBEIAAhhIAbAAIAABhgAgPgqIAAgZIAfAAIAAAZg");
	this.shape_4.setTransform(146.2,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61645").s().p("AAcA+Ig4hSIAABSIgdAAIAAh7IAiAAIA0BNIAAhNIAdAAIAAB7g");
	this.shape_5.setTransform(136.4,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61645").s().p("AATAxIAAg6IglA6IgdAAIAAhhIAdAAIAAA3IAig3IAgAAIAABhg");
	this.shape_6.setTransform(118.7,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61645").s().p("AgvAyIgCAAIgBgXIACAAIABAAQAKAAAFgSQAFgSACgoIBLAAIAABhIgcAAIAAhKIgWAAQgCAWgEAPQgCAPgGAIQgFAJgHAEQgIADgKAAIgDAAg");
	this.shape_7.setTransform(106.4,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61645").s().p("AATAxIAAg6IglA6IgdAAIAAhhIAdAAIAAA3IAig3IAgAAIAABhg");
	this.shape_8.setTransform(95.7,17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61645").s().p("AgdBAQgNgFgGgNQgHgNAAgUIAAgBQAAgSADgNQADgOAHgJQAIgJAOgFQAOgFAWgCIAKgBQAFgBACgBIAFgDIAGAXQgDAEgIACQgHACgMABQgOAAgIADQgJADgEAGQgEAGAAAJQAHgGAJgDQAJgEAKgBQAWAAALAMQAMALABAWQgBAQgHALQgHALgMAFQgNAGgQAAQgRAAgMgGgAgNADQgIAFgEAHQgBAQAHAHQAGAIANAAQAMAAAHgGQAHgHAAgMQAAgLgGgGQgGgEgLAAQgJAAgHADg");
	this.shape_9.setTransform(83.5,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61645").s().p("AgcAtQgNgGgGgLQgIgMAAgQQAAgQAIgLQAGgLANgHQAMgFAQAAQARAAANAFQALAHAIALQAHAMAAAPQAAAQgHAMQgIALgLAGQgNAGgRAAQgQAAgMgGgAgSgTQgHAHAAAMQAAAMAHAHQAHAIALAAQAJAAAFgDQAGgEADgGQADgHAAgHQAAgMgIgHQgGgIgMAAQgLAAgHAIg");
	this.shape_10.setTransform(70.9,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61645").s().p("AAqAxIgCgWIgCgQIgCgNIgCgRIgGASIgEAMIgFANIgFARIgaAAIgFgRIgFgNIgEgMIgHgSIgCARIgCANIgBAQIgCAWIgcAAIACgYIADgWIADgWIAFgdIAoAAIAFARIAGAUIAEASIAGgSIAGgUIAFgRIAnAAIAFAdIADAWIADAWIACAYg");
	this.shape_11.setTransform(57.2,17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61645").s().p("AgcAtQgNgGgGgLQgIgMAAgQQAAgQAIgLQAGgLANgHQAMgFAQAAQARAAAMAFQANAHAGALQAIAMAAAPQAAAQgIAMQgGALgNAGQgMAGgRAAQgQAAgMgGgAgSgTQgHAHAAAMQAAAMAHAHQAHAIALAAQAJAAAFgDQAFgEAEgGQADgHAAgHQAAgMgHgHQgIgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(43.6,17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61645").s().p("AgOAxIAAhKIgiAAIAAgXIBiAAIAAAXIgkAAIAABKg");
	this.shape_13.setTransform(32,17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61645").s().p("AgwAxIAAhhIA0AAQAVAAAJAHQAKAGgBALQABAIgFAGQgFAGgMADIAAAAQANABAHAGQAHAGAAAJQAAAIgEAHQgEAGgKADQgJAEgPAAgAgUAaIAaAAQAHABADgDQADgCAAgFQAAgEgDgDQgDgCgGAAIgbAAgAgUgJIAXAAQAFAAADgCQACgCAAgFQABgDgDgCQgCgCgGAAIgXAAg");
	this.shape_14.setTransform(21.3,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61645").s().p("AAjA+IgHgXIg5AAIgEAMIgDALIgfAAIAPgsIAQgpIAQgmIAoAAIASAoIAQApIAOAqgAAUAOIgKgZIgKgcIgLAbIgKAaIApAAIAAAAg");
	this.shape_15.setTransform(8.6,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.4,29.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AgRAoQgJgEgFgIQgEgIAAgNQAAgJADgKQADgJAIgHQAIgHANgEQALgEASAAIAAASIgOAAQgIAAgHADQgGACgGAHIACgCIAFgBIAIgBQALAAAHAEQAHAEAFAHQADAFAAAJQAAAKgEAHQgEAHgIAEQgIAEgLAAQgKAAgIgEgAgLABQgEAEAAAIQAAAGAEAEQAEAEAHAAQAFAAAEgCQAEgCACgEIABgHIgBgHQgCgDgEgCQgDgBgGAAQgHAAgEACg");
	this.shape.setTransform(119.2,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737372").s().p("AgdAsIAAgSQAIABAIgBQAHAAAGgDQAHgCAFgGIABgBIgBABIgBABIgGABIgIABQgKAAgIgEQgHgEgEgHQgEgFAAgJQABgKAEgHQAEgHAIgEQAIgEALAAQAKAAAIAEQAJAEAEAIQAFAIABANQAAAJgEAKQgEAJgHAHQgIAHgMAEQgLAEgPAAIgFAAgAgJgYQgDACgBAEQgCADAAAEQAAADACAEQABADADABQAEACAFAAQAHAAAFgCQAEgEAAgIQAAgGgEgEQgEgEgHAAQgGAAgEACg");
	this.shape_1.setTransform(110.7,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737372").s().p("AgYAKIAAgSIAxAAIAAASg");
	this.shape_2.setTransform(103.5,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737372").s().p("AAHAqIAAgPIguAAIAAgPQAKgNALgOIAXgaIAZAAIgRARIgQATQgIAHgFAJIAXAAIAAgSIAUAAIAAASIANAAIAAAQIgNAAIAAAPg");
	this.shape_3.setTransform(96.2,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737372").s().p("AgaAqIAKgWIALgUIAIgPIAHgJIgrAAIAAgRIBDAAIAAANIgNATIgLASIgJASIgGAPg");
	this.shape_4.setTransform(88.1,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737372").s().p("AgZAKIAAgSIAyAAIAAASg");
	this.shape_5.setTransform(81.3,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737372").s().p("AghArIAAgRIAZgQQAKgHAGgEQAFgGABgGQgBgFgCgCQgCgDgEgBIgIgBIgMABIgOADIAAgQIAPgEIAQgBQAIAAAHADQAHADAFAGQAEAGABAKQgBAJgEAGQgFAGgIAHIgSAMIAiAAIAAARg");
	this.shape_6.setTransform(74.3,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737372").s().p("AgZAlQgJgGAAgOQAAgHAEgFQAEgFAGgBQgFgDgEgEQgDgEAAgGQAAgJAEgFQAFgFAHgDQAHgDAJAAQAJAAAIADQAHACAFAGQAEAFAAAJQAAAGgDAEQgEAFgFACQAGABAEAFQAEAFAAAHQAAAOgJAGQgJAHgRAAQgQAAgJgHgAgIAHQgDACgCACIgBAFQAAAGAEADQAEADAGAAQAGAAAEgDQAFgDAAgGIgCgFQgBgCgDgCQgDgCgGAAQgFAAgDACgAgJgYQgDADAAAEIACAEIAEAEQADACADAAQAEAAADgCQADgBABgDIACgEQAAgEgEgDQgDgDgGAAQgFAAgEADg");
	this.shape_7.setTransform(66.1,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737372").s().p("AghArIAAgRIAagQQAJgHAGgEQAFgGAAgGQAAgFgCgCQgDgDgEgBIgIgBIgLABIgOADIAAgQIAPgEIAQgBQAIAAAIADQAGADAFAGQAFAGAAAKQAAAJgFAGQgFAGgIAHIgTAMIAjAAIAAARg");
	this.shape_8.setTransform(57.9,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737372").s().p("AgRA3IAJgSQAEgJABgJQACgJAAgKQAAgJgCgJQgBgJgEgJIgJgSIAUAAIAIASQAEAJABAJQACAJAAAJQAAAKgCAJQgBAJgEAJIgIASg");
	this.shape_9.setTransform(48.4,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737372").s().p("AACArIAAhAIgWAEIAAgRIApgIIAABVg");
	this.shape_10.setTransform(43.2,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737372").s().p("AgNAqIgKgBIgKgCIAAgRIAPADIANABQAHAAAGgDQAFgDAAgGQAAgFgDgDQgDgDgGgBIgOgBIgBAAIAAgGIAUgUIgmAAIAAgRIBAAAIAAANIgUAUQAFABAFADQAFAEADAEQAEAFAAAGQAAALgFAGQgFAHgJADQgJACgKAAIgJgBg");
	this.shape_11.setTransform(36.7,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737372").s().p("AgZAlQgJgGAAgOQAAgHAEgFQAEgFAGgBQgFgDgEgEQgDgEAAgGQAAgJAEgFQAFgFAHgDQAHgDAJAAQAJAAAIADQAHACAFAGQAEAFAAAJQAAAGgDAEQgEAFgFACQAGABAEAFQAEAFAAAHQAAAOgJAGQgJAHgRAAQgQAAgJgHgAgIAHQgDACgCACIgBAFQAAAGAEADQAEADAGAAQAGAAAEgDQAFgDAAgGIgCgFQgBgCgDgCQgDgCgGAAQgFAAgDACgAgJgYQgDADAAAEIACAEIAEAEQADACADAAQAEAAADgCQADgBABgDIACgEQAAgEgEgDQgDgDgGAAQgFAAgEADg");
	this.shape_12.setTransform(28.3,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737372").s().p("AgCA3IgIgSQgEgJgBgJQgCgJAAgKQAAgJACgJQABgJAEgJIAIgSIAUAAIgJASIgGASQgBAJAAAJQAAAKABAJIAGASIAJASg");
	this.shape_13.setTransform(22.2,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737372").s().p("AgaAqIAKgWIALgUIAIgPIAHgJIgrAAIAAgRIBDAAIAAANIgNATIgLASIgJASIgGAPg");
	this.shape_14.setTransform(13,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737372").s().p("AgJAfIAAgWIgVAAIAAgRIAVAAIAAgWIASAAIAAAWIAWAAIAAARIgWAAIAAAWg");
	this.shape_15.setTransform(5.7,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,125.5,21.8), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo_n();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,86,106), null);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AyAfQQgvAAAAg/MAAAg8hQAAg/AvAAMAkBAAAQAvAAAAA/MAAAA8hQAAA/gvAAg");
	this.shape_13.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9_1, new cjs.Rectangle(0,0,240,400), null);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B5B5B5","#FAFAFA","#CACACA"],[0,0.471,1],0,-91.9,0,201).s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B5B5B5","#FAFAFA","#CACACA"],[0,0.471,1],0,-91.9,0,201).s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ33("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(106,115.5,1,1,0,0,0,106,122.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Символ34("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(106,129.7,1,1,0,0,0,106,129.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Символ37("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(106,146.2,1,1,0,0,0,106,151.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).wait(54).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).wait(54).to({startPosition:0},0).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,212,192);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ28("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.4,-2.4,1,1,0,0,0,71.4,13.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13.6,alpha:1},19,cjs.Ease.get(1)).wait(17));

	// Символ 29
	this.instance_1 = new lib.Символ29("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.5,21.6,1,1,0,0,0,52.5,13.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:37.6,alpha:1},19,cjs.Ease.get(1)).wait(13));

	// Символ 30
	this.instance_2 = new lib.Символ30("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.6,43.6,1,1,0,0,0,77.6,13.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:59.6,alpha:1},19,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-16,142.8,27.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A49hVIY94+IY+Y+I4+Y9g");
	var mask_graphics_1 = new cjs.Graphics().p("A49ghIY94+IY+Y+I4+Y9g");
	var mask_graphics_2 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_3 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_4 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_5 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_6 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_7 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_8 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_9 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_10 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_11 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_12 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_13 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_14 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_15 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_16 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_17 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_18 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_19 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_20 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_21 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_22 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_23 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_24 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_25 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_26 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_27 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_28 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_29 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_30 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_31 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_32 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_75 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_76 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_77 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_78 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_79 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_80 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_81 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_82 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_83 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_84 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_85 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_86 = new cjs.Graphics().p("A49AfIY949IY+Y9I4+Y+g");
	var mask_graphics_87 = new cjs.Graphics().p("A49CBIY949IY+Y9I4+Y+g");
	var mask_graphics_88 = new cjs.Graphics().p("A49DsIY949IY+Y9I4+Y+g");
	var mask_graphics_89 = new cjs.Graphics().p("A49FfIY949IY+Y9I4+Y+g");
	var mask_graphics_90 = new cjs.Graphics().p("A49hVIY94+IY+Y+I4+Y9g");
	var mask_graphics_91 = new cjs.Graphics().p("A49ghIY94+IY+Y+I4+Y9g");
	var mask_graphics_92 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_93 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_94 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_95 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_96 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_97 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_98 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_99 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_100 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_101 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_102 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_103 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_104 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_105 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_106 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_107 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_108 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_109 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_110 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_111 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_112 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_113 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_114 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_115 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_116 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_117 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_118 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_119 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_120 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_121 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_122 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_165 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_166 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_167 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_168 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_169 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_170 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_171 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_172 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_173 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_174 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_175 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_176 = new cjs.Graphics().p("A49AfIY949IY+Y9I4+Y+g");
	var mask_graphics_177 = new cjs.Graphics().p("A49CBIY949IY+Y9I4+Y+g");
	var mask_graphics_178 = new cjs.Graphics().p("A49DsIY949IY+Y9I4+Y+g");
	var mask_graphics_179 = new cjs.Graphics().p("A49FfIY949IY+Y9I4+Y+g");
	var mask_graphics_180 = new cjs.Graphics().p("A49hVIY94+IY+Y+I4+Y9g");
	var mask_graphics_181 = new cjs.Graphics().p("A49ghIY94+IY+Y+I4+Y9g");
	var mask_graphics_182 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_183 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_184 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_185 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_186 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_187 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_188 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_189 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_190 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_191 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_192 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_193 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_194 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_195 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_196 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_197 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_198 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_199 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_200 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_201 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_202 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_203 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_204 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_205 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_206 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_207 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_208 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_209 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_210 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_211 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_212 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_255 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_256 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_257 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_258 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_259 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_260 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_261 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_262 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_263 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_264 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_265 = new cjs.Graphics().p("A49AAIY949IY+Y9I4+Y+g");
	var mask_graphics_266 = new cjs.Graphics().p("A49AfIY949IY+Y9I4+Y+g");
	var mask_graphics_267 = new cjs.Graphics().p("A49CBIY949IY+Y9I4+Y+g");
	var mask_graphics_268 = new cjs.Graphics().p("A49DsIY949IY+Y9I4+Y+g");
	var mask_graphics_269 = new cjs.Graphics().p("A49FfIY949IY+Y9I4+Y+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:100,y:-168.4}).wait(1).to({graphics:mask_graphics_1,x:100,y:-163.2}).wait(1).to({graphics:mask_graphics_2,x:100,y:-156.4}).wait(1).to({graphics:mask_graphics_3,x:100,y:-146.6}).wait(1).to({graphics:mask_graphics_4,x:100,y:-137.2}).wait(1).to({graphics:mask_graphics_5,x:100,y:-128}).wait(1).to({graphics:mask_graphics_6,x:100,y:-119.2}).wait(1).to({graphics:mask_graphics_7,x:100,y:-110.8}).wait(1).to({graphics:mask_graphics_8,x:100,y:-102.6}).wait(1).to({graphics:mask_graphics_9,x:100,y:-94.8}).wait(1).to({graphics:mask_graphics_10,x:100,y:-87.4}).wait(1).to({graphics:mask_graphics_11,x:100,y:-80.2}).wait(1).to({graphics:mask_graphics_12,x:100,y:-73.4}).wait(1).to({graphics:mask_graphics_13,x:100,y:-66.9}).wait(1).to({graphics:mask_graphics_14,x:100,y:-60.8}).wait(1).to({graphics:mask_graphics_15,x:100,y:-55}).wait(1).to({graphics:mask_graphics_16,x:100,y:-49.5}).wait(1).to({graphics:mask_graphics_17,x:100,y:-44.4}).wait(1).to({graphics:mask_graphics_18,x:100,y:-39.5}).wait(1).to({graphics:mask_graphics_19,x:100,y:-35.1}).wait(1).to({graphics:mask_graphics_20,x:100,y:-30.9}).wait(1).to({graphics:mask_graphics_21,x:100,y:-27.1}).wait(1).to({graphics:mask_graphics_22,x:100,y:-23.6}).wait(1).to({graphics:mask_graphics_23,x:100,y:-20.4}).wait(1).to({graphics:mask_graphics_24,x:100,y:-17.6}).wait(1).to({graphics:mask_graphics_25,x:100,y:-15.1}).wait(1).to({graphics:mask_graphics_26,x:100,y:-13}).wait(1).to({graphics:mask_graphics_27,x:100,y:-11.2}).wait(1).to({graphics:mask_graphics_28,x:100,y:-9.7}).wait(1).to({graphics:mask_graphics_29,x:100,y:-8.5}).wait(1).to({graphics:mask_graphics_30,x:100,y:-7.7}).wait(1).to({graphics:mask_graphics_31,x:100,y:-7.2}).wait(1).to({graphics:mask_graphics_32,x:100,y:-7}).wait(43).to({graphics:mask_graphics_75,x:100,y:63}).wait(1).to({graphics:mask_graphics_76,x:100,y:63.9}).wait(1).to({graphics:mask_graphics_77,x:100,y:66.4}).wait(1).to({graphics:mask_graphics_78,x:100,y:70.7}).wait(1).to({graphics:mask_graphics_79,x:100,y:76.6}).wait(1).to({graphics:mask_graphics_80,x:100,y:84.3}).wait(1).to({graphics:mask_graphics_81,x:100,y:93.7}).wait(1).to({graphics:mask_graphics_82,x:100,y:104.8}).wait(1).to({graphics:mask_graphics_83,x:100,y:117.5}).wait(1).to({graphics:mask_graphics_84,x:100,y:132}).wait(1).to({graphics:mask_graphics_85,x:100,y:148.2}).wait(1).to({graphics:mask_graphics_86,x:100,y:162.9}).wait(1).to({graphics:mask_graphics_87,x:100,y:172.7}).wait(1).to({graphics:mask_graphics_88,x:100,y:183.4}).wait(1).to({graphics:mask_graphics_89,x:100,y:194.9}).wait(1).to({graphics:mask_graphics_90,x:100,y:-168.4}).wait(1).to({graphics:mask_graphics_91,x:100,y:-163.2}).wait(1).to({graphics:mask_graphics_92,x:100,y:-156.4}).wait(1).to({graphics:mask_graphics_93,x:100,y:-146.6}).wait(1).to({graphics:mask_graphics_94,x:100,y:-137.2}).wait(1).to({graphics:mask_graphics_95,x:100,y:-128}).wait(1).to({graphics:mask_graphics_96,x:100,y:-119.2}).wait(1).to({graphics:mask_graphics_97,x:100,y:-110.8}).wait(1).to({graphics:mask_graphics_98,x:100,y:-102.6}).wait(1).to({graphics:mask_graphics_99,x:100,y:-94.8}).wait(1).to({graphics:mask_graphics_100,x:100,y:-87.4}).wait(1).to({graphics:mask_graphics_101,x:100,y:-80.2}).wait(1).to({graphics:mask_graphics_102,x:100,y:-73.4}).wait(1).to({graphics:mask_graphics_103,x:100,y:-66.9}).wait(1).to({graphics:mask_graphics_104,x:100,y:-60.8}).wait(1).to({graphics:mask_graphics_105,x:100,y:-55}).wait(1).to({graphics:mask_graphics_106,x:100,y:-49.5}).wait(1).to({graphics:mask_graphics_107,x:100,y:-44.4}).wait(1).to({graphics:mask_graphics_108,x:100,y:-39.5}).wait(1).to({graphics:mask_graphics_109,x:100,y:-35.1}).wait(1).to({graphics:mask_graphics_110,x:100,y:-30.9}).wait(1).to({graphics:mask_graphics_111,x:100,y:-27.1}).wait(1).to({graphics:mask_graphics_112,x:100,y:-23.6}).wait(1).to({graphics:mask_graphics_113,x:100,y:-20.4}).wait(1).to({graphics:mask_graphics_114,x:100,y:-17.6}).wait(1).to({graphics:mask_graphics_115,x:100,y:-15.1}).wait(1).to({graphics:mask_graphics_116,x:100,y:-13}).wait(1).to({graphics:mask_graphics_117,x:100,y:-11.2}).wait(1).to({graphics:mask_graphics_118,x:100,y:-9.7}).wait(1).to({graphics:mask_graphics_119,x:100,y:-8.5}).wait(1).to({graphics:mask_graphics_120,x:100,y:-7.7}).wait(1).to({graphics:mask_graphics_121,x:100,y:-7.2}).wait(1).to({graphics:mask_graphics_122,x:100,y:-7}).wait(43).to({graphics:mask_graphics_165,x:100,y:63}).wait(1).to({graphics:mask_graphics_166,x:100,y:63.9}).wait(1).to({graphics:mask_graphics_167,x:100,y:66.4}).wait(1).to({graphics:mask_graphics_168,x:100,y:70.7}).wait(1).to({graphics:mask_graphics_169,x:100,y:76.6}).wait(1).to({graphics:mask_graphics_170,x:100,y:84.3}).wait(1).to({graphics:mask_graphics_171,x:100,y:93.7}).wait(1).to({graphics:mask_graphics_172,x:100,y:104.8}).wait(1).to({graphics:mask_graphics_173,x:100,y:117.5}).wait(1).to({graphics:mask_graphics_174,x:100,y:132}).wait(1).to({graphics:mask_graphics_175,x:100,y:148.2}).wait(1).to({graphics:mask_graphics_176,x:100,y:162.9}).wait(1).to({graphics:mask_graphics_177,x:100,y:172.7}).wait(1).to({graphics:mask_graphics_178,x:100,y:183.4}).wait(1).to({graphics:mask_graphics_179,x:100,y:194.9}).wait(1).to({graphics:mask_graphics_180,x:100,y:-168.4}).wait(1).to({graphics:mask_graphics_181,x:100,y:-163.2}).wait(1).to({graphics:mask_graphics_182,x:100,y:-156.4}).wait(1).to({graphics:mask_graphics_183,x:100,y:-146.6}).wait(1).to({graphics:mask_graphics_184,x:100,y:-137.2}).wait(1).to({graphics:mask_graphics_185,x:100,y:-128}).wait(1).to({graphics:mask_graphics_186,x:100,y:-119.2}).wait(1).to({graphics:mask_graphics_187,x:100,y:-110.8}).wait(1).to({graphics:mask_graphics_188,x:100,y:-102.6}).wait(1).to({graphics:mask_graphics_189,x:100,y:-94.8}).wait(1).to({graphics:mask_graphics_190,x:100,y:-87.4}).wait(1).to({graphics:mask_graphics_191,x:100,y:-80.2}).wait(1).to({graphics:mask_graphics_192,x:100,y:-73.4}).wait(1).to({graphics:mask_graphics_193,x:100,y:-66.9}).wait(1).to({graphics:mask_graphics_194,x:100,y:-60.8}).wait(1).to({graphics:mask_graphics_195,x:100,y:-55}).wait(1).to({graphics:mask_graphics_196,x:100,y:-49.5}).wait(1).to({graphics:mask_graphics_197,x:100,y:-44.4}).wait(1).to({graphics:mask_graphics_198,x:100,y:-39.5}).wait(1).to({graphics:mask_graphics_199,x:100,y:-35.1}).wait(1).to({graphics:mask_graphics_200,x:100,y:-30.9}).wait(1).to({graphics:mask_graphics_201,x:100,y:-27.1}).wait(1).to({graphics:mask_graphics_202,x:100,y:-23.6}).wait(1).to({graphics:mask_graphics_203,x:100,y:-20.4}).wait(1).to({graphics:mask_graphics_204,x:100,y:-17.6}).wait(1).to({graphics:mask_graphics_205,x:100,y:-15.1}).wait(1).to({graphics:mask_graphics_206,x:100,y:-13}).wait(1).to({graphics:mask_graphics_207,x:100,y:-11.2}).wait(1).to({graphics:mask_graphics_208,x:100,y:-9.7}).wait(1).to({graphics:mask_graphics_209,x:100,y:-8.5}).wait(1).to({graphics:mask_graphics_210,x:100,y:-7.7}).wait(1).to({graphics:mask_graphics_211,x:100,y:-7.2}).wait(1).to({graphics:mask_graphics_212,x:100,y:-7}).wait(43).to({graphics:mask_graphics_255,x:100,y:63}).wait(1).to({graphics:mask_graphics_256,x:100,y:63.9}).wait(1).to({graphics:mask_graphics_257,x:100,y:66.4}).wait(1).to({graphics:mask_graphics_258,x:100,y:70.7}).wait(1).to({graphics:mask_graphics_259,x:100,y:76.6}).wait(1).to({graphics:mask_graphics_260,x:100,y:84.3}).wait(1).to({graphics:mask_graphics_261,x:100,y:93.7}).wait(1).to({graphics:mask_graphics_262,x:100,y:104.8}).wait(1).to({graphics:mask_graphics_263,x:100,y:117.5}).wait(1).to({graphics:mask_graphics_264,x:100,y:132}).wait(1).to({graphics:mask_graphics_265,x:100,y:148.2}).wait(1).to({graphics:mask_graphics_266,x:100,y:162.9}).wait(1).to({graphics:mask_graphics_267,x:100,y:172.7}).wait(1).to({graphics:mask_graphics_268,x:100,y:183.4}).wait(1).to({graphics:mask_graphics_269,x:100,y:194.9}).wait(1));

	// Символ 13
	this.instance = new lib.Символ24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(101,-6.4,1,1,0,0,0,93.7,13.6);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Символ13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.9,-6.4,1,1,0,0,0,100.9,13.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Символ9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.9,5.6,1,1,0,0,0,67.6,13.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13.6,alpha:1},24,cjs.Ease.get(1)).wait(51).to({startPosition:0},0).to({y:23.6,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},1).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).to({y:13.6,alpha:1},23,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({y:23.6,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180).to({_off:false},0).to({y:25.6,alpha:1},23,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({y:45.6,alpha:0},14,cjs.Ease.get(-1)).wait(1));

	// Символ 15
	this.instance_3 = new lib.Символ26("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.2,15.3,1,1,0,0,0,100.6,14.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Символ15("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.3,15.3,1,1,0,0,0,99.5,14.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Символ12("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(101.2,27.3,1,1,0,0,0,96.1,14.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:35.3,alpha:1},24,cjs.Ease.get(1)).wait(44).to({startPosition:0},0).to({y:45.3,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},3).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({y:35.3,alpha:1},23,cjs.Ease.get(1)).wait(46).to({startPosition:0},0).to({y:45.3,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},3).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184).to({_off:false},0).to({y:47.3,alpha:1},23,cjs.Ease.get(1)).wait(46).to({startPosition:0},0).to({y:67.3,alpha:0},14,cjs.Ease.get(-1)).wait(3));

	// Символ 16
	this.instance_6 = new lib.Символ27("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(100.8,37.9,1,1,0,0,0,93.8,12.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Символ16("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(100.8,37.9,1,1,0,0,0,93.8,12.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({y:57.9,alpha:1},24,cjs.Ease.get(1)).wait(38).to({startPosition:0},0).to({y:67.9,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},5).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({y:57.9,alpha:1},23,cjs.Ease.get(1)).wait(35).to({startPosition:0},0).wait(4).to({startPosition:0},0).to({y:67.9,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},5).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,201.8,2.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(96.5,-15.4,1,1,0,0,0,88,13.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.6,alpha:1},29,cjs.Ease.quadInOut).wait(1));

	// Слой_1
	this.instance_1 = new lib.Символ6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.7,44.9,1,1,0,0,0,105.3,12.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:34.9,alpha:1},19,cjs.Ease.quadInOut).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,-29,196.4,29.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(87.8,41.8,1,1,0,0,0,62.8,10.8);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.5,15.2,0.839,0.839,0,0,0,105.5,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,52.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(32.3,39.7,0.748,0.748,0,0,0,43.1,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.instance_1 = new lib.Символ23("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.3,11.5,1,1,0,0,0,69.3,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.5,79.3);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(123.3,39.6,1,1,0,0,0,106.3,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(614));

	// Слой_11
	this.instance_1 = new lib.Символ32("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(119,215.5,1,1,0,0,0,106,122.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(418).to({_off:false},0).wait(196));

	// Слой_10
	this.instance_2 = new lib.Символ9_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},22,cjs.Ease.get(-1)).to({_off:true},1).wait(376).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadInOut).wait(196));

	// Слой_5
	this.instance_3 = new lib.Символ7("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.3,154.9,1,1,0,0,0,105.3,23.9);

	this.instance_4 = new lib.Символ22("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(119.9,135.9,1,1,0,0,0,100.9,42.9);

	this.instance_5 = new lib.Символ31("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.7,146.8,1.168,1.168,0,0,0,77.7,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},47).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},275).wait(281));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({startPosition:29},0).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(556));

	// Слой_3
	this.instance_6 = new lib.Символ4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.5,365.4,1,1,0,0,0,88.5,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(614));

	// Слой_13
	this.instance_7 = new lib.Анимация3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,200);

	this.instance_8 = new lib.Анимация4("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,200);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},18).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({startPosition:0},0).to({_off:true,alpha:0},18,cjs.Ease.get(-1)).wait(589));

	// Символ 17
	this.instance_9 = new lib.Символ17("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(53.5,255.4,0.366,0.366,0,0,0,167.7,97.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({startPosition:0},0).to({regX:168,regY:96.7,scaleX:0.72,scaleY:0.72,x:114.2,y:250.3},20,cjs.Ease.quadInOut).wait(66).to({startPosition:0},0).to({x:364.2,alpha:0},17,cjs.Ease.get(-1)).wait(174).to({x:-361.7,y:270.3,alpha:1},0).to({regX:167.7,regY:97.1,scaleX:0.37,scaleY:0.37,x:53.5,y:255.4},17,cjs.Ease.cubicInOut).wait(270));

	// Слой_6
	this.instance_10 = new lib.Символ14("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(117.6,252.2,0.345,0.345,0,0,0,168.2,104.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({startPosition:0},0).to({x:137.6,alpha:0},13,cjs.Ease.get(-1)).wait(74).to({regX:168,regY:103.9,scaleX:0.68,scaleY:0.68,x:-123.5,y:251.4},0).to({x:116.7,alpha:1},19,cjs.Ease.get(1)).wait(66).to({startPosition:0},0).to({x:371.5,alpha:0},17,cjs.Ease.get(-1)).wait(84).to({x:-113.5,y:271.4,alpha:1},0).to({regX:168.2,regY:104.1,scaleX:0.35,scaleY:0.35,x:117.6,y:252.2},17,cjs.Ease.cubicInOut).wait(270));

	// Символ 18
	this.instance_11 = new lib.Символ18("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(181.8,240.6,0.33,0.33,0,0,0,168.6,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({startPosition:0},0).to({x:201.8,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},69).wait(95).to({_off:false,regX:168.1,regY:100.7,scaleX:0.73,scaleY:0.73,x:-130,y:247},0).to({x:115,alpha:1},19,cjs.Ease.get(1)).wait(77).to({startPosition:0},0).to({regX:168.6,regY:101,scaleX:0.33,scaleY:0.33,x:181.8,y:240.6},17,cjs.Ease.cubicInOut).wait(270));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B5B5B5","#FAFAFA","#CACACA"],[0,0.471,1],0,-188.9,0,226).s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(614));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,0,248,400);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.1,199,249,402);
// library properties:
lib.properties = {
	id: '10C2F6EDBA44BA419676E6308AF025DA',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./logo_n.jpg", id:"logo_n"},
		{src:"./index_atlas_P_.png", id:"index_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['10C2F6EDBA44BA419676E6308AF025DA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;