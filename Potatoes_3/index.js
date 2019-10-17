(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_NP_", frames: [[0,0,336,672],[332,674,330,242],[0,674,330,278],[338,0,330,242]]}
];


// symbols:



(lib.bg_ = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kart1 = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.kart2 = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.kart3 = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005D8C").s().p("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gGggIgLAgIgIAAIgLggIgGAgIgJAAIAJgzIAJAAIAMAjIAMgjIAKAAIAIAzgAQQAdIAAggIgTAgIgJAAIAAgzIAKAAIAAAgIAUggIAIAAIAAAzgAO9AdIAAgVIgDAAIgKAVIgLAAIAMgXQgKgDAAgJIABgHQAAgCADgDIAEgCIAEgBIAJgBIAKAAIAAAzgAO1gMIgDACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAIAGABIAEAAIAAgLIgDAAgAOJAdIgOglIgOAlIgLAAIAUgzIAKAAIAUAzgAM1AdIAAgzIAcAAIAAAKIgTAAIAAAJIATAAIAAAIIgTAAIAAAOIATAAIAAAKgAMAAdIAAgOQgGAAgEgCQgEgBgDgEQgDgEAAgEQAAgFACgDQACgDAEgDQAEgBAIAAIAAgHIAKAAIAAAHIACAAQATAAAAAPQAAADgCADQgBAEgDABQgDADgDAAIgJABIAAAOgAMKAGIADAAQAFAAACgCQABgCAAgCIgBgFQgCgBgFAAIgDAAgAL3gFQgCACAAADQAAACACACQADACAEAAIACAAIAAgMIgCAAQgFAAgCABgAJ+AdIAAgpIgJAAIAAgKIAcAAIAAAKIgJAAIAAApgAJDAdIAAgzIALAAQAIAAAEACQAEABACAEQACADAAAFQAAAGgDACQgDAEgFABIgKABIAAAWgAJNgCIADAAIAFAAIACgCIABgDQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGgBIgDAAgAIjAdIgEgLIgVAAIgEALIgKAAIAUgzIAKAAIATAzgAIOAIIAOAAIgHgQgAHfAdIgQgXIAAAXIgKAAIAAgzIAKAAIAAASIAOgSIAMAAIgSAWIAUAdgAFrAdIAAggIgTAgIgIAAIAAgzIAJAAIAAAgIAUggIAIAAIAAAzgAEcAdIAAgzIAcAAIAAAKIgSAAIAAAJIASAAIAAAIIgSAAIAAAOIASAAIAAAKgABCAdIAAgzIAIAAQAJAAACABQAEABADAEQADADAAAEIgBAGIgEADQAEACACAEQADADAAAFQAAAEgDADQgCAEgDACQgFACgFAAgABMATIADAAQAGAAACgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgDgCQgCgCgGAAIgCAAgABMgCIACAAQAEAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgDAAIgDAAgAg/AdIAAgVIgCAAIgLAVIgKAAIALgXQgKgDAAgJIABgHIADgFIAFgCIAEgBIAJgBIAKAAIAAAzgAhHgMQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgBAEQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIAGABIADAAIAAgLIgCAAgAh3AdIAAggIgTAgIgJAAIAAgzIAKAAIAAAgIATggIAJAAIAAAzgAj3AdIgEgLIgVAAIgEALIgKAAIAUgzIAKAAIATAzgAkMAIIAOAAIgHgQgAlyAdIAAggIgTAgIgJAAIAAgzIAKAAIAAAgIATggIAJAAIAAAzgAmtAdIgOglIgOAlIgLAAIAUgzIAKAAIAUAzgAnuAdIgEgLIgVAAIgEALIgKAAIAUgzIAKAAIATAzgAoDAIIANAAIgGgQgApEAdIAAgzIAcAAIAAAKIgTAAIAAAJIATAAIAAAIIgTAAIAAAOIATAAIAAAKgAp7AdIAAgzIAKAAQAJAAAEACQAEABABAEQADAEAAAEQAAAGgDACQgEAEgEABIgKABIAAAWgApxgCIAIAAIACgCIABgDQAAgDgCgBIgGgBIgDAAgAqzAdIAAggIgTAgIgIAAIAAgzIAJAAIAAAgIAUggIAIAAIAAAzgAtlAdIAAgzIAJAAQAIAAACABQAEABADAEQADADAAAEIgBAGIgEADQAFADABADQADADAAAFQAAAEgDADQgCAEgDACQgFACgFAAgAtbATIADAAQAGAAACgBQACgCAAgDQAAgDgCgCQgDgCgGAAIgCAAgAtbgCIACAAQAEAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgDAAIgDAAgAuNAdIAAgpIgJAAIAAgKIAcAAIAAAKIgJAAIAAApgAyfAdIAAgzIAIAAQAJAAACABQAEABADAEQADADAAAEIgBAGIgEADQAEACACAEQADADAAAFQAAAEgDADQgCAEgDACQgFACgFAAgAyVATIADAAQAGAAACgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgDgCQgCgCgGAAIgCAAgAyVgCIACAAQAEAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgDAAIgDAAgAz3AdIAAggIgTAgIgJAAIAAgzIAKAAIAAAgIAUggIAIAAIAAAzgA2TAdIAAgzIAKAAQAJAAADACQAEABACAEQACAFAAADQAAAGgDACQgCAEgFABIgLABIAAAWgA2KgCIAJAAIACgCIABgDQAAgDgDgBIgGgBIgDAAgA23AdIAAgqIgRAAIAAAqIgKAAIAAgzIAlAAIAAAzgAFbgbQgDgBgBgCQgCgCgBgEIAIAAIADADIAEAAIAEgBQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAIAAQgBAFgDADQgEACgGAAQgFAAgDgBg");
	this.shape.setTransform(149.1,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005D8C").s().p("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");
	this.shape_1.setTransform(150.3,8.1,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,-3,300.5,31.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjiD8IAAn3IHFAAIAAH3g");
	mask.setTransform(22.7,25.2);

	// Слой_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F265D").s().p("AgCCAIAAgPQgYg2gZgnQgWgfANgzQANg3ArgEIAAgGIAJACIgBAEQArAGAOAuQAMAqgSApQgcA1gSAuIAAAPg");
	this.shape_2.setTransform(16.7,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#19628D").ss(0.2,0,0,22.9).p("ABiicIjBAAQAAABAgAnQAWAbgJAcQgGAWgPAiQgOAegDAPQgMAwAtBFIArAAQgegIgMgfQgNglAPg4QADgKAGgKQAZgqAFgKQAIgQAGgZQAQAwAhAtQAgA8gOAtQgNAmgkAJIBPAAg");
	this.shape_3.setTransform(35,34.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19628D").s().p("AASCdQAkgKANgmQAOgsggg7QghgugQgwQgGAZgIARIgeAzQgGAKgDALQgPA3ANAlQAMAfAeAIIgrAAQgthFAMgxQADgPAOgdQAPgiAGgWQAJgcgWgbIgggoIDBAAIAAE5g");
	this.shape_4.setTransform(35.1,34.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#187E47").s().p("AgEBTIAAgGQggghgugSQgugOgWgMQAXgcAsACQAagDAUASQAVAQAOAiQgFguglghQgMggAcgJIA1gBQASAEAEAMQAEAMgJANQgjAkgDAsQAKgZAIgLQANgRAbgPQBHgEASAcQgCAFg6AVQg9AXgZAjIgBAEg");
	this.shape_5.setTransform(16.7,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,0,0,22.9).p("AgCBMIAAgGQggghgugRQgugPgXgLQAYgcAsABQAZgCAVARQAVASAOAhQgFguglgiQgMggAcgIIA1gBQARAEAEAMQAFALgJANQgkAkgCAsQAKgZAIgKQANgRAbgQQBHgDASAbQgCAFg6AVQg9AYgZAiIgBAEg");
	this.shape_6.setTransform(16.5,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#19628D").ss(0.2,0,0,22.9).p("Ai/j6IF/AAIAAH1Il/AAgAi5D1IFzAAIAAnoIlzAAg");
	this.shape_7.setTransform(26.1,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19628D").s().p("Ai/D7IAAn1IF/AAIAAH1gAi5D1IFzAAIAAnoIlzAAg");
	this.shape_8.setTransform(26.1,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AikD7IAAl7QgpgOgNgHQAUgXAigDIAAhLIF/AAIAAH1g");
	this.shape_9.setTransform(23.4,25.2);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,45.4,50.5), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAgIAAg/IApAAIAAANIgZAAIAAAyg");
	this.shape.setTransform(60.7,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAgIgDgGIgDgIQgDgGgDgDQgDgEgHAAIgCAAIAAAbIgQAAIAAg/IAQAAIAAAbIADAAIASgbIAUAAIgaAcQAHABAEAEQAFAFADAHIACAJIAFAJg");
	this.shape_1.setTransform(54.8,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAvIAghdIALAAIggBdg");
	this.shape_2.setTransform(49,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRApQgHgFgDgJQgDgKAAgMQAAgLADgJQACgJAHgHQAEgFAHgDQAGgDAIgBIAKgCIAIgCIgBANIgHABIgHACQgHABgFACQgFACgDAEIgFAJIgCAJIAAAAQADgFAGgEQAGgDAGAAQAIAAAGADQAGAFAEAGQADAHAAAJQAAALgEAHQgDAHgHAFQgHADgKABQgKAAgHgHgAgGgDIgFAEIgCAFIgBAHIACAKQABAGAEADQADADAEABQAGAAADgEQADgDACgEQABgFAAgFQAAgFgBgFQgCgEgDgDQgDgDgGAAQgDAAgDACg");
	this.shape_3.setTransform(43.1,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAgIAFgBIAFgDIAEgEIAEgGIABgCIAAgBIAAgBIAAgCIgYg5IASAAIALAiIACAHIABAEIAAAAIACgEIACgHIAKgiIARAAIgQArIgIATIgHANIgGAIIgJAGIgIACg");
	this.shape_4.setTransform(36.3,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAtIAAhDIAAgLIgBgKIAOAAIABAKQAEgGAFgDQAGgCAGAAQAHAAAGAEQAGADAEAIQAEAHAAAKQAAALgFAHQgEAHgGAEQgHAEgHAAQgFAAgFgDQgEgCgDgEIAAAAIAAAhgAgIgdQgEAEgCAFIAAACIAAACIAAAKIAAACIAAACQACAEADADQAEADAFAAQAHAAAEgGQAEgEAAgKQAAgFgBgFQgCgEgEgDQgDgDgFAAQgEAAgEADg");
	this.shape_5.setTransform(29.4,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBHIA8h3IAAAAIhDAAIAAgXIBfAAIAAASIg7B8g");
	this.shape_6.setTransform(16.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E72727").s().p("AoIChQgoAAAAgpIAAjvQAAgpAoAAIQRAAQAoAAAAApIAADvQAAApgoAAg");
	this.shape_7.setTransform(56.1,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.2,32.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgVAlIgLgBIAAhIIATAAIAAAXIAGAAIAGgBQAIAAAHADQAIACAFAFQAGAFgBAJQAAAHgCAEQgDAFgEADQgEADgGACIgLACIgLABIgMAAgAgNAAIAAAYIAEAAIAEAAIAIgBQAFgBADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgIgBIgEAAIgEABg");
	this.shape.setTransform(105.6,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgiAXIAFgCIADgCQAEgDABgHIABgQIAAgdIA3AAIAABIIgTAAIAAg6IgTAAIAAAQQABANgDAKQgCAJgGAFQgDADgFACQgEABgHAAg");
	this.shape_1.setTransform(97,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgPAhQgJgEgEgIQgEgJAAgLQAAgJADgJQAFgJAIgGQAHgFALAAQAJAAAGADQAGADAEAGQADAFACAGQABAGAAAGIAAAEIAAADIgwAAQAAAHADAEQADAEAFACQAEACAGAAIAMgBIAJgCIADAMIgMAEQgGABgIAAQgLAAgIgFgAAQgGIgBgIQgBgEgDgEQgEgCgGAAQgFAAgDACQgEAEgCAEIgCAIIAfAAIAAAAg");
	this.shape_2.setTransform(89.7,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgHBEIAAgcQgLgBgIgFQgJgEgFgIQgFgIAAgMQAAgLAFgIQAFgIAJgEQAIgFALgBIAAggIAQAAIAAAgQAKABAJAFQAIAEAFAIQAFAIAAALQAAAMgFAIQgGAIgIAFQgJAEgJABIAAAcgAAJAbQAJgBAFgHQAFgHAAgKQAAgJgFgHQgFgHgJgCgAgWgOQgFAHAAAJQAAAKAFAHQAFAHAKABIAAgyQgKACgFAHg");
	this.shape_3.setTransform(80.7,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgSAhQgJgEgFgIQgEgIAAgMQAAgLAEgJQAFgJAJgEQAJgFAKAAQAKAAAJAFQAHAFAFAHQAEAJABALQAAAMgGAJQgFAJgIAEQgJAEgJAAQgKAAgIgFgAgJgUQgFADgBAGIgCALQAAAHACAFQADAGAEADQAEADAEABQAIAAAFgHQAEgHABgLQAAgFgCgGQgCgFgDgEQgEgDgHgBQgFABgEADg");
	this.shape_4.setTransform(71.3,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgJAlIAAg6IgVAAIAAgOIA9AAIAAAOIgWAAIAAA6g");
	this.shape_5.setTransform(63.8,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgjA0IAAhOIgBgMIAAgLIARAAIABALQAEgHAGgDQAGgDAIAAQAIAAAHAFQAHAEAEAIQAEAJAAALQAAANgEAIQgGAJgHAEQgHAEgJAAQgGAAgFgCQgGgDgDgEIAAAlgAgKghQgEAEgCAGIgBADIAAACIAAALIAAADIABACQABAFAFADQAEAEAGAAQAIgBAFgGQAEgGAAgKQAAgHgBgFQgDgFgEgEQgEgDgFAAQgFABgFADg");
	this.shape_6.setTransform(56.3,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgUAjQgFgDgDgFQgCgFAAgGQAAgNALgHQALgGAUAAIAAgCIgBgFQgBgCgDgDQgEgCgFAAIgLABIgJAEIgDgMQAEgDAHgBQAGgCAIAAQAMAAAGAFQAHAEADAGQACAIAAAIIAAAZIABAKIAAAIIgQAAIgBgIIgBAAQgDADgGAEQgEACgIAAQgHAAgFgDgAAAACQgFABgDADQgEADAAAFQAAAGADACQADADAEAAQAFAAAEgDQADgDACgEIAAgCIAAgCIAAgKIgDAAIgJABg");
	this.shape_7.setTransform(47.7,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAOAlIgDgHIgEgJQgDgHgEgEQgEgEgHAAIgCAAIAAAfIgTAAIAAhIIATAAIAAAeIACAAIAWgeIAWAAIgdAfQAHACAFAEQAFAGAEAIIADAKIAFALg");
	this.shape_8.setTransform(40.8,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAQAzIAAgZIAAgLIABgJIAAgLIAAAAIgFAKIgFAKIgIASIgJASIgXAAIAAhIIASAAIAAAZIAAALIAAAJIgBAKIABAAIAFgLIAFgLIAQghIAXAAIAABIgAgOgkQgFgFgBgKIANAAQAAAFACAEQACACADAAQAEAAACgCQACgEABgFIAMAAQgBAKgGAGQgFAEgJAAQgKABgEgGg");
	this.shape_9.setTransform(139.4,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgWAlIgLAAIgLgBIAAhIIATAAIAAAXIAFAAIAHgBQAHAAAHADQAIACAEAGQAFAEAAAJQgBAHgCAEQgCAFgEADQgHAFgHABQgHACgGAAIgEAAgAgZAAIAAAYIADAAIAEAAQAFAAAEgBQAEgBACgDQADgDAAgFQAAgFgCgDIgHgDIgHgBIgGAAIgDABgAAaAkIAAhIIATAAIAABIg");
	this.shape_10.setTransform(129.6,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAOAkIAAgfIgbAAIAAAfIgTAAIAAhIIATAAIAAAcIAbAAIAAgcIATAAIAABIg");
	this.shape_11.setTransform(119.9,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAOAkIAAgfIgbAAIAAAfIgTAAIAAhIIATAAIAAAcIAbAAIAAgcIATAAIAABIg");
	this.shape_12.setTransform(111.5,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgPAhQgJgEgEgIQgFgJABgLQAAgJADgJQAEgJAIgFQAIgGALAAQAJAAAGADQAGADADAFQAEAGACAGQACAGgBAGIAAAEIAAADIgwAAQABAGADAFQADAEAFACQAEACAFAAIALgBIAJgCIAEAMIgMADQgGACgIAAQgLAAgIgFgAAQgGIgBgIQgCgFgCgCQgEgDgGAAQgFAAgEADQgDACgCAFIgCAIIAfAAIAAAAg");
	this.shape_13.setTransform(103.4,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgVAlIgKgBIAAhHIAHgBIAKAAIAKgBIAJABQAGAAAFADQAGABADAEQAEAEAAAGQAAAEgCAEQgCAEgEACQgDACgEAAIAAAAQAIACAFADQAFAFAAAHQAAAIgEAEQgEAEgHADQgGACgHAAIgMACIgNgBgAgNAZIAEAAIAFAAIAHAAQAFgBADgCQACgDAAgEQAAgGgFgDQgFgCgIAAIgIAAgAgNgYIAAASIAIAAIAHgBQAEgBADgCQACgCAAgDQAAgFgEgCQgEgCgHAAIgFAAIgEAAg");
	this.shape_14.setTransform(95.8,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgJAkIAAg5IgVAAIAAgPIA9AAIAAAPIgWAAIAAA5g");
	this.shape_15.setTransform(88.4,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgLAhQgIgFgFgHQgEgJAAgMQAAgJAEgJQAFgJAJgFQAJgFAMAAIAKABIAIACIgDAOIgGgCIgIAAQgHAAgFACQgEADgDAGQgDAFAAAGQAAAHADAGQADAFAEADQAFADAHAAIAIgBIAGgCIADANIgJACQgFACgHAAQgKAAgJgFg");
	this.shape_16.setTransform(81.8,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgVAlIgKgBIAAhIIASAAIAAAXIAGAAIAGgBQAHAAAIADQAIACAFAFQAFAFAAAJQAAAHgCAEQgDAFgEADQgEADgFACIgMACIgLABIgMAAgAgNAAIAAAYIAEAAIAFAAIAIgBQAEgBADgDQADgDAAgFQAAgFgDgDQgDgDgFAAIgHgBIgFAAIgEABg");
	this.shape_17.setTransform(74.6,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgiAXIAFgCIADgCQAEgDABgHIABgQIAAgdIA3AAIAABIIgTAAIAAg6IgTAAIAAAQQABANgDAKQgCAJgGAFQgDADgFACQgEABgHAAg");
	this.shape_18.setTransform(66,13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgTAhQgHgEgFgIQgFgJAAgMQAAgKAFgJQAEgJAJgEQAJgFAJAAQAMAAAHAFQAJAFAEAHQAFAJAAALQgBAMgEAKQgGAIgJAEQgIAEgJAAQgKAAgJgFgAgKgUQgDADgDAGIgBALQAAAHACAGQACAGAEADQAFADAEAAQAIgBAFgGQAFgHAAgLQAAgFgCgGQgCgFgEgEQgEgEgGAAQgGAAgEAEg");
	this.shape_19.setTransform(58.3,13);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgVAlIgKgBIAAhHIAHgBIAKAAIAKgBIAJABQAGAAAFADQAGABADAEQAEAEAAAGQAAAEgCAEQgCAEgEACQgDACgEAAIAAAAQAIACAFADQAFAFAAAHQAAAIgEAEQgEAEgHADQgGACgHAAIgMACIgNgBgAgNAZIAEAAIAFAAIAHAAQAFgBADgCQACgDAAgEQAAgGgFgDQgFgCgIAAIgIAAgAgNgYIAAASIAIAAIAHgBQAEgBADgCQACgCAAgDQAAgFgEgCQgEgCgHAAIgFAAIgEAAg");
	this.shape_20.setTransform(50.3,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgTAhQgIgEgEgIQgFgJAAgMQAAgKAFgJQAEgJAJgEQAJgFAKAAQAKAAAJAFQAHAFAFAHQAEAJABALQgBAMgFAKQgFAIgIAEQgJAEgJAAQgKAAgJgFgAgKgUQgEADgBAGIgCALQAAAHACAGQADAGAEADQAEADAEAAQAIgBAFgGQAEgHABgLQAAgFgCgGQgCgFgDgEQgFgEgGAAQgFAAgFAEg");
	this.shape_21.setTransform(42,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAZAwIgBgXIgvAAIgBAXIgOAAIAAgkIAGgBIAEgHIADgHIADgMIABgOIAAgSIA1AAIAAA6IAHABIgBAkgAgFgYIgBAMIgCALIgCAGIgEAGIAcAAIAAgtIgTAAg");
	this.shape_22.setTransform(33.4,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgSAhQgIgEgGgIQgEgJAAgMQAAgKAEgJQAGgJAIgEQAJgFAKAAQAKAAAIAFQAJAFAEAHQAEAJABALQAAAMgGAKQgFAIgIAEQgJAEgJAAQgKAAgIgFgAgJgUQgFADgCAGIgBALQAAAHACAGQACAGAFADQAEADAEAAQAIgBAFgGQAEgHABgLQAAgFgCgGQgCgFgDgEQgEgEgHAAQgFAAgEAEg");
	this.shape_23.setTransform(25.1,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgjA0IAAhOIAAgMIAAgMIAQAAIABAMQAEgGAGgEQAHgDAHAAQAIAAAHAFQAHAEAEAIQAEAJAAALQABANgGAIQgFAIgHAFQgIAEgIAAQgGAAgFgDQgGgCgDgEIAAAlgAgKghQgEAEgCAGIgBADIAAACIAAALIAAACIABADQABAFAFADQAEAEAGAAQAIgBAFgGQAEgGABgLQAAgFgCgGQgCgGgFgDQgEgCgFAAQgFgBgFAEg");
	this.shape_24.setTransform(16.6,14.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAUAyIAAhUIgnAAIAABUIgTAAIAAhkIBNAAIAABkg");
	this.shape_25.setTransform(7.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.8,34.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.kart3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330,242);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAgIAAg/IApAAIAAANIgZAAIAAAyg");
	this.shape.setTransform(71.1,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAgIgCgGIgEgIQgDgGgDgDQgDgEgHAAIgCAAIAAAbIgQAAIAAg/IAQAAIAAAbIADAAIATgbIATAAIgaAcQAGABAFAEQAFAFADAHIACAJIAFAJg");
	this.shape_1.setTransform(65.3,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAvIAghdIALAAIggBdg");
	this.shape_2.setTransform(59.4,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRApQgHgFgDgJQgDgKAAgMQAAgLADgJQACgJAHgHQAEgFAHgDQAGgDAIgBIAKgCIAIgCIgBANIgHABIgHACQgHABgFACQgFACgDAEIgFAJIgCAJIAAAAQADgFAGgEQAGgDAGAAQAIAAAGADQAGAFAEAGQADAHAAAJQAAALgEAHQgDAHgHAFQgHADgKABQgKAAgHgHgAgGgDIgFAEIgCAFIgBAHQAAAGACAEQABAGAEADQADADAEABQAGAAADgEQADgDACgEQABgFAAgFQAAgFgBgFQgCgEgDgDQgDgDgGAAQgDAAgDACg");
	this.shape_3.setTransform(53.6,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAgIAFgBIAFgDIAEgEIAEgGIABgCIAAgBIAAgBIAAgCIgYg5IASAAIALAiIACAHIABAEIAAAAIACgEIACgHIAKgiIARAAIgQArIgIATIgHANIgGAIIgJAGIgIACg");
	this.shape_4.setTransform(46.7,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAtIAAhDIAAgLIgBgKIAOAAIABAKQAEgGAFgDQAGgCAGAAQAHAAAGAEQAGADAEAIQAEAHAAAKQAAALgFAHQgEAHgGAEQgHAEgHAAQgFAAgFgDQgEgCgDgEIAAAAIAAAhgAgIgdQgEAEgCAFIAAACIAAACIAAAKIAAACIAAACQACAEADADQAEADAFAAQAHAAAEgGQAEgEAAgKQAAgFgBgFQgCgEgEgDQgDgDgFAAQgEAAgEADg");
	this.shape_5.setTransform(39.8,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBGIgQgGIAFgUIAOAFQAJACAJAAQAIAAAHgDQAHgDAEgFQAEgGAAgJQABgMgLgIQgJgGgUAAIgLAAIgJABIAKhIIBJAAIAAAXIg2AAIgFAcIAFAAIAGAAQAIAAAJACQAJACAHAFQAJAFAFAIQAEAJABANQAAAOgHALQgHALgNAHQgNAGgRABQgMAAgKgDg");
	this.shape_6.setTransform(26.3,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBGQgKgCgGgEIAGgVQAFADAJADQAIADALAAQAJAAAGgDQAHgEADgEQADgGAAgFQAAgJgFgGQgFgFgHgDQgHgCgIAAIgMAAIAAgSIAMAAQAGAAAGgCQAGgDAFgEQAEgFAAgGQAAgIgFgFQgGgFgLAAQgJAAgHADQgIADgFADIgGgUQAGgEALgDQALgEANAAQAOABAKAEQAKAFAFAIQAFAHAAAKQAAALgHAJQgGAJgOAFIAAAAQAJABAHAEQAHAFAEAIQAFAHAAAKQAAALgHAKQgGALgNAFQgMAGgRAAQgNAAgLgEg");
	this.shape_7.setTransform(14.4,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E72727").s().p("AoIChQgoAAAAgpIAAjvQAAgpAoAAIQRAAQAoAAAAApIAADvQAAApgoAAg");
	this.shape_8.setTransform(56.1,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.2,32.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgJApIAAhBIgZAAIAAgQIBFAAIAAAQIgYAAIAABBg");
	this.shape.setTransform(93.3,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgJApIAAhBIgZAAIAAgQIBFAAIAAAQIgYAAIAABBg");
	this.shape_1.setTransform(85.9,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgRAmQgKgFgFgKQgFgJAAgMQAAgLAEgLQAFgKAJgGQAJgGAMAAQALAAAGADQAHAEAEAGQAFAGABAHIACAOIAAAFIgBADIg2AAQAAAIAEAEQADAFAGACQAEADAIAAIAMgCIAKgDIAEAPQgGACgHABQgIACgJAAQgMAAgJgFgAATgHIgCgJQgCgFgDgDQgEgDgHgBQgFAAgEAEQgEADgDAFIgCAJIAkAAIAAAAg");
	this.shape_2.setTransform(77.8,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgmAaQADAAABgCIAFgCQAEgEABgHQABgIAAgLIAAghIA+AAIAABSIgVAAIAAhCIgVAAIAAASQAAAPgDALQgCALgIAFQgDAEgFACQgFABgHAAg");
	this.shape_3.setTransform(68.4,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgoA7IAAhYIAAgPIAAgMIASAAIABAMQAFgHAHgEQAHgDAIAAQAKAAAIAFQAIAFAEAKQAGAJAAANQgBAPgFAIQgGAKgIAGQgJAEgJAAQgHAAgGgDQgHgDgDgFIAAAAIAAArgAgLgmQgFAFgCAHIgBADIAAACIAAANIAAADIAAADQADAFAFAEQAEAEAHAAQAJAAAGgHQAFgHAAgMQAAgIgCgFQgDgGgEgEQgEgDgHAAQgGAAgFADg");
	this.shape_4.setTransform(59.7,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgXAoQgGgEgDgGQgDgFAAgGQAAgQANgHQANgIAWAAIAAgBIgBgGQgBgEgEgCQgDgCgHgBIgMACQgFACgFADIgEgOIAMgFQAIgCAJAAQANAAAIAFQAHAFADAIQADAHAAAKIAAAcIAAALIACAJIgTAAIgCgJIAAAAQgEAFgGADQgGADgIAAQgIAAgGgDgAAAACQgGABgEAEQgEADAAAGQAAAGADADQAEADAFAAQAFAAAEgDQAFgEABgEIABgDIAAgCIAAgLIgOABg");
	this.shape_5.setTransform(49.9,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAPApIgDgHIgEgKQgDgIgFgFQgFgEgIAAIgCAAIAAAiIgVAAIAAhRIAVAAIAAAiIACAAIAZgiIAZAAIghAkQAIACAGAFQAGAGAEAKIAEALIAGALg");
	this.shape_6.setTransform(42.1,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgQA0QgOgHgGgNQgIgNABgSQgBgSAJgNQAHgOAOgHQAOgHARAAQAKAAAIACIAKADIgFARIgKgDQgGgCgGAAQgMAAgIAFQgJAFgFAJQgGAKAAAMQAAATALALQAKALATABQAGAAAGgCIAKgDIAEARIgMADIgSACQgRAAgNgHg");
	this.shape_7.setTransform(32.3,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAcA3IgBgbIg2AAIgBAbIgQAAIAAgpIAHgBIAFgIIADgIIADgOIACgQIAAgVIA8AAIAABDIAJAAIgBAqgAgGgbIgBAOIgDAMIgCAHIgDAHIAeAAIAAgzIgVAAg");
	this.shape_8.setTransform(18.8,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgSAmQgJgFgFgKQgFgJAAgMQAAgLAFgLQAEgKAJgGQAJgGANAAQAJAAAIADQAGAEAFAGQADAGACAHQACAHAAAHIAAAFIAAADIg3AAQABAIADAEQAEAFAFACQAFADAGAAIANgCIALgDIACAPQgFACgHABQgHACgJAAQgNAAgKgFgAASgHIgBgJQgCgFgDgDQgEgDgHgBQgFAAgFAEQgDADgCAFIgDAJIAjAAIAAAAg");
	this.shape_9.setTransform(9.8,14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AglA6IAAhwIANgCIASgBQALAAAJADQAHACAGAFQAGAEADAGQACAHAAAIQAAAIgCAHQgDAGgFAEQgGAGgJADQgKADgKAAIgFAAIgFgBIAAAsgAgRgnIAAAmIAFABIAFAAQALAAAHgGQAGgFABgKQAAgKgHgFQgFgEgLAAIgHAAIgFABg");
	this.shape_10.setTransform(1,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,0,105.3,24.8);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgXAoQgGgEgDgGQgDgFAAgGQAAgQANgHQANgIAWAAIAAgBIgBgGQgBgEgEgCQgDgCgHgBIgMACQgFACgFADIgEgOIAMgFQAIgCAJAAQANAAAIAFQAHAFADAIQADAHAAAKIAAAcIAAALIACAJIgTAAIgCgJIAAAAQgEAFgGADQgGADgIAAQgIAAgGgDgAAAACQgGABgEAEQgEADAAAGQAAAGADADQAEADAFAAQAFAAAEgDQAFgEABgEIABgDIAAgCIAAgLIgOABg");
	this.shape.setTransform(56.4,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgmAaQADAAABgCIAFgCQAEgEABgHQABgIAAgLIAAghIA+AAIAABSIgVAAIAAhCIgVAAIAAASQAAAPgDALQgCALgIAFQgDAEgFACQgFABgHAAg");
	this.shape_1.setTransform(47.2,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgXAoQgGgEgDgGQgDgFAAgGQAAgQANgHQANgIAWAAIAAgBIgBgGQgBgEgEgCQgDgCgHgBIgMACQgFACgFADIgEgOIAMgFQAIgCAJAAQANAAAIAFQAHAFADAIQADAHAAAKIAAAcIAAALIACAJIgTAAIgCgJIAAAAQgEAFgGADQgGADgIAAQgIAAgGgDgAAAACQgGABgEAEQgEADAAAGQAAAGADADQAEADAFAAQAFAAAEgDQAFgEABgEIABgDIAAgCIAAgLIgOABg");
	this.shape_2.setTransform(38.7,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAQApIAAhBIgfAAIAABBIgVAAIAAhRIBIAAIAABRg");
	this.shape_3.setTransform(29.9,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAfApIgCgkIAAgMIgBgPIAAAAIgDAIIgCAIIgEAJIgNAlIgOAAIgMgkIgDgIIgCgJIgDgJIAAAAIgBAPIAAANIgCAjIgTAAIAGhRIAaAAIAMAkIADAJIADALIACgHIADgJIADgIIALggIAaAAIAGBRg");
	this.shape_4.setTransform(19.3,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAaA5IAAgoIABgYIABgXIgBAAIgJAUIgLATIgcAwIgXAAIAAhxIATAAIAAAoIAAAZIgBAYIAAABIAKgUIALgTIAdgzIAWAAIAABxg");
	this.shape_5.setTransform(7.9,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,24.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvLkIAA3HMAlfAAAIAAXHg");
	this.shape.setTransform(120,74);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,240,148.1), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1FS6Qh8AAhYhYQhYhYAAh8IAA8bQAAh8BYhYQBYhYB8AAMAqLAAAQB8AABYBYQBYBYAAB8IAAcbQAAB8hYBYQhYBYh8AAg");
	mask.setTransform(165,121);

	// Слой_1
	this.instance = new lib.kart1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,330,242), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1FVuQh8AAhYhYQhYhYAAh8MAAAgiDQAAh8BYhYQBYhYB8AAMAqLAAAQB8AABYBYQBYBYAAB8MAAAAiDQAAB8hYBYQhYBYh8AAg");
	mask.setTransform(165,139);

	// Слой_1
	this.instance = new lib.kart2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,330,278), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19628D").s().p("AgvA0IAHgCIAIgEQAFgCAEgEIAGgIIABgCIABgDIAAgCIgBgEIgqhmIAmAAIARA4IADAKIACALIABAAIACgLIADgKIAOg4IAlAAIgaBKQgIAWgHAOQgGAOgHAJQgFAJgFAFQgKAIgIAEQgJADgIABg");
	this.shape.setTransform(174.3,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19628D").s().p("Ag3AfIAIgDIAFgEQAFgEABgJIABgWIAAguIBbAAIAABwIgjAAIAAhUIgXAAIAAAUQAAATgEAOQgDAPgJAIQgFAFgIADQgIACgMABg");
	this.shape_1.setTransform(161.3,64.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19628D").s().p("AgdA0QgNgHgIgNQgIgNAAgSQAAgSAIgNQAHgNAOgHQANgIASAAQARAAANAIQAMAHAIANQAHANAAARQAAATgJAOQgIANgOAGQgNAHgPAAQgQAAgNgHgAgMgcQgFAFgCAIQgDAHAAAIQAAAKADAHQADAIAFAEQAFAFAGAAQALgBAGgJQAGgJAAgPQAAgIgDgHQgCgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_2.setTransform(149.1,64.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#19628D").s().p("AgRA4IAAhUIggAAIAAgbIBjAAIAAAbIghAAIAABUg");
	this.shape_3.setTransform(137.2,64.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19628D").s().p("AgRAzQgNgGgHgNQgIgNAAgRQAAgQAIgNQAIgOAOgIQAOgIAUgBIAOABIAMAEIgFAaIgIgDIgLgBQgOABgIAIQgHAJgBANQAAAKAFAHQAEAHAFAEQAIAEAIgBIAMgBIAIgCIAEAaIgMADQgJACgKgBQgRABgOgIg");
	this.shape_4.setTransform(126.8,64.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19628D").s().p("AgvA0IAHgCIAIgEQAEgCAEgEIAHgIIABgCIABgDIAAgCIgBgEIgqhmIAmAAIARA4IADAKIACALIABAAIACgLIADgKIAOg4IAlAAIgaBKQgIAWgHAOQgGAOgHAJQgFAJgGAFQgJAIgJAEQgIADgIABg");
	this.shape_5.setTransform(110.9,66.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19628D").s().p("AAoA4IgCgtIAAgLIgBgNIAAgOIAAAAIgEAMIgDAKIgEAOIgPAtIgZAAIgNgsIgDgLIgDgNIgDgMIgBAAIAAAVIgCARIgBAsIgfAAIAIhvIAsAAIAMAqIAEANIADAPIABAAIADgPIAGgPIALgoIAtAAIAHBvg");
	this.shape_6.setTransform(96.6,64.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19628D").s().p("AgkAsQgQgQgBgaQABgKADgLQADgKAIgJQAGgJALgFQALgFANgBQATABALAIQAKAIAFANQAGAMAAAOIgBAIIAAAGIhIAAQAAAHAFAEQAEAFAIACQAGADAHAAQAKAAAHgCIAPgDIAEAXQgIAEgLACQgKACgLgBQgcABgPgPgAAVgMIgCgJQgBgGgFgDQgDgEgJAAQgGAAgEADQgFAFgDAEQgCAGAAAEIAoAAIAAAAg");
	this.shape_7.setTransform(82.3,64.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19628D").s().p("AhPA4IAAhvIAjAAIAABVIAbAAIAAhVIAiAAIAABVIAcAAIAAhVIAiAAIAABvg");
	this.shape_8.setTransform(66.9,64.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19628D").s().p("AghA2QgJgFgEgIQgEgIgBgJQAAgOAJgKQAIgIAPgFQAPgFASAAIAAgBQABgDgCgEQgCgDgEgCQgFgDgHAAQgJAAgIADQgIACgGAEIgHgXQAHgDALgDQALgEAPAAQASAAALAHQAKAGAFALQAFALgBAOIAAAmIABAPIACAMIggAAIgCgLIgBAAQgFAHgJADQgHAEgKAAQgLAAgIgFgAAAAFQgHABgFAEQgEAEAAAHQAAAHAEADQAEADAGAAQAFAAAGgEQAEgDACgGIABgDIAAgDIAAgMQgKAAgGACg");
	this.shape_9.setTransform(51.2,64.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19628D").s().p("AgpBOIgQgBIAAiYIAMgBIAQgBIASgBQAPAAALACQAKACAJAFQAIAEAFAIQAGAIgBAKQABALgHAJQgGAIgNAFIAAABQAOADAIAJQAJAKAAAPQgBAKgEAJQgEAIgIAGQgIAHgOADQgQAEgWAAIgWgBgAgVA0IAFABIAIAAQAIAAAGgCQAGgDAEgFQAFgEAAgJQAAgHgFgFQgDgFgIgCQgGgCgJAAIgLAAgAgVgzIAAAkIALAAQANAAAHgGQAHgFAAgIQAAgJgGgFQgGgEgLAAIgKAAIgFABg");
	this.shape_10.setTransform(38.7,62);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#19628D").s().p("AASA4IgFgKIgGgPQgDgJgFgFQgFgFgJAAIgDAAIAAAsIgjAAIAAhvIAjAAIAAAtIADAAIAcgtIApAAIgqAwQAKACAHAHQAHAJAEAMIAHAQIAHARg");
	this.shape_11.setTransform(21.4,64.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#19628D").s().p("AAWA4IAAgiIAAgPIABgNIABgUIgBAAIgGAQIgGAOIgLAZIgLAbIgrAAIAAhvIAhAAIAAAiIAAAXIgCAWIABAAIAHgRIAGgOIAVgwIArAAIAABvg");
	this.shape_12.setTransform(167.8,41.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#19628D").s().p("AA6BLIgBglIiOAAIAAhwIAjAAIAABWIAbAAIAAhWIAiAAIAABWIAcAAIAAhWIAiAAIAABYIANAAIgCA9g");
	this.shape_13.setTransform(151.9,43.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#19628D").s().p("AgdA0QgNgHgIgNQgIgNAAgSQAAgSAIgNQAHgNAOgHQANgIASAAQARAAANAIQAMAHAIANQAHANAAARQAAATgJAOQgIANgOAGQgNAHgPAAQgQAAgNgHgAgMgcQgFAFgCAIQgDAHAAAIQAAAKADAHQADAIAFAEQAFAFAGAAQALgBAGgJQAGgJAAgPQAAgIgDgHQgCgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_14.setTransform(135.3,41.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19628D").s().p("AgcA5IgOAAIgKgBIAAhuIAMgBIAQgBIARgBIAQABQAJABAJADQAJACAGAGQAGAGAAAKQAAAHgDAFQgEAFgFADQgFADgGABIAAABQANACAHAGQAIAHAAALQAAAMgHAHQgHAHgLADQgKAEgMABIgTABIgPgBgAgSAkIAGABIAGAAQAGAAAFgCQAFgBADgDQAEgDAAgGQAAgHgHgEQgGgDgMAAIgKAAgAgMgjIgFABIAAAXIAJAAQAJAAAGgDQAGgDABgGQAAgGgFgDQgFgDgKAAIgGAAg");
	this.shape_15.setTransform(122.7,41.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#19628D").s().p("AgdA0QgNgHgIgNQgIgNAAgSQAAgSAIgNQAHgNAOgHQANgIASAAQARAAANAIQAMAHAIANQAHANAAARQAAATgJAOQgIANgOAGQgNAHgPAAQgQAAgNgHgAgMgcQgFAFgCAIQgDAHAAAIQAAAKADAHQADAIAFAEQAFAFAGAAQALgBAGgJQAGgJAAgPQAAgIgDgHQgCgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_16.setTransform(109.4,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#19628D").s().p("AglAsQgPgQgBgaQAAgKAEgLQADgKAIgJQAHgJAKgFQALgFAOgBQARABAMAIQAKAIAGANQAEAMAAAOIAAAIIgBAFIhHAAQABAIAEAEQAEAFAIACQAFADAJAAQAIAAAIgCIAPgDIAFAXQgKAEgKACQgKACgMgBQgbABgQgPgAAVgMIgCgJQgBgGgEgDQgFgEgIAAQgGAAgFADQgEAFgDAEQgCAGAAAEIAoAAIAAAAg");
	this.shape_17.setTransform(92.1,41.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#19628D").s().p("AAWA4IAAgiIAAgPIABgNIABgUIgBAAIgGAQIgGAOIgLAZIgLAbIgrAAIAAhvIAhAAIAAAiIAAAXIgCAWIABAAIAHgRIAGgOIAVgwIArAAIAABvg");
	this.shape_18.setTransform(79.1,41.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#19628D").s().p("AAzA4IgGgKIgEgPQgEgKgFgFQgFgFgHAAIgDAAIAAAtIghAAIAAgtIgDAAQgHAAgFAFQgFAFgDAKIgGAPIgEAKIgjAAIAHgRIAHgSQAEgLAGgIQAGgHAKgCIgngwIAmAAIAZAtIAEAAIAAgtIAhAAIAAAtIAEAAIAZgtIAnAAIgoAwQAKACAGAHQAHAIAEALIAGASIAHARg");
	this.shape_19.setTransform(63.7,41.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#19628D").s().p("AgkAsQgQgQgBgaQABgKADgLQADgKAIgJQAGgJALgFQALgFAOgBQARABAMAIQALAIAFANQAEAMAAAOIAAAIIAAAFIhIAAQAAAIAFAEQAEAFAIACQAFADAIAAQAJAAAIgCIAPgDIAEAXQgIAEgLACQgKACgLgBQgcABgPgPgAAVgMIgCgJQgBgGgEgDQgFgEgIAAQgGAAgFADQgEAFgDAEQgCAGAAAEIAoAAIAAAAg");
	this.shape_20.setTransform(49.2,41.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#19628D").s().p("AgcA5IgOAAIgKgBIAAhuIAMgBIAQgBIARgBIAQABQAJABAJADQAJACAGAGQAGAGAAAKQAAAHgDAFQgEAFgFADQgFADgGABIAAABQANACAHAGQAIAHAAALQAAAMgHAHQgHAHgLADQgKAEgMABIgTABIgPgBgAgSAkIAGABIAGAAQAGAAAFgCQAFgBADgDQAEgDAAgGQAAgHgHgEQgGgDgMAAIgKAAgAgMgjIgFABIAAAXIAJAAQAJAAAGgDQAGgDABgGQAAgGgFgDQgFgDgKAAIgGAAg");
	this.shape_21.setTransform(37.1,41.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#19628D").s().p("AgRAzQgNgGgHgNQgHgNgBgRQABgQAHgNQAHgOAOgIQAPgIAUgBIAOABIAMAEIgFAaIgIgDIgMgBQgNABgIAIQgIAJAAANQAAAKAFAHQAEAHAGAEQAGAEAJgBIAMgBIAJgCIADAaIgMADQgJACgKgBQgRABgOgIg");
	this.shape_22.setTransform(25.4,41.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#19628D").s().p("AgvA0IAHgCIAJgEQADgCAFgEIAGgIIABgCIABgDIAAgCIgBgEIgqhmIAmAAIARA4IADAKIACALIABAAIACgLIADgKIAOg4IAlAAIgaBKQgIAWgHAOQgGAOgHAJQgFAJgFAFQgKAIgIAEQgJADgIABg");
	this.shape_23.setTransform(186.8,21.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#19628D").s().p("AAlBLIgBglIhGAAIgCAlIgaAAIgCg9IALAAQAEgGACgGIAGgLIADgSIABgTIAAgcIBZAAIAABYIANAAIgCA9gAgGgjQAAAHgBAIIgEAPIgDAJIgEAJIAkAAIAAg9IgYAAg");
	this.shape_24.setTransform(173.8,21);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#19628D").s().p("AgdA0QgNgHgIgNQgIgNAAgSQAAgSAIgNQAHgNAOgHQANgIASAAQARAAANAIQAMAHAIANQAHANAAARQAAATgJAOQgIANgOAGQgNAHgPAAQgQAAgNgHgAgMgcQgFAFgCAIQgDAHAAAIQAAAKADAHQADAIAFAEQAFAFAGAAQALgBAGgJQAGgJAAgPQAAgIgDgHQgCgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_25.setTransform(160.5,19.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#19628D").s().p("AgmA4IAAhvIBNAAIAAAbIgqAAIAABUg");
	this.shape_26.setTransform(149.7,19.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#19628D").s().p("AgcA5IgOAAIgKgBIAAhuIAMgBIAQgBIARgBIAQABQAJABAJADQAJACAGAGQAGAGAAAKQAAAHgDAFQgEAFgFADQgFADgGABIAAABQANACAHAGQAIAHAAALQAAAMgHAHQgHAHgLADQgKAEgMABIgTABIgPgBgAgSAkIAGABIAGAAQAGAAAFgCQAFgBADgDQAEgDAAgGQAAgHgHgEQgGgDgMAAIgKAAgAgMgjIgFABIAAAXIAJAAQAJAAAGgDQAGgDABgGQAAgGgFgDQgFgDgKAAIgGAAg");
	this.shape_27.setTransform(133.7,19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#19628D").s().p("AgcA5IgOAAIgKgBIAAhuIAMgBIAQgBIARgBIAQABQAJABAJADQAJACAGAGQAGAGAAAKQAAAHgDAFQgEAFgFADQgFADgGABIAAABQANACAHAGQAIAHAAALQAAAMgHAHQgHAHgLADQgKAEgMABIgTABIgPgBgAgSAkIAGABIAGAAQAGAAAFgCQAFgBADgDQAEgDAAgGQAAgHgHgEQgGgDgMAAIgKAAgAgMgjIgFABIAAAXIAJAAQAJAAAGgDQAGgDABgGQAAgGgFgDQgFgDgKAAIgGAAg");
	this.shape_28.setTransform(116.3,19.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#19628D").s().p("AglAsQgPgQAAgaQgBgKAEgLQAEgKAGgJQAIgJAKgFQALgFANgBQASABALAIQAMAIAEANQAFAMABAOIgBAIIgBAFIhHAAQABAIAEAEQAFAFAGACQAGADAJAAQAJAAAHgCIAPgDIAFAXQgJAEgKACQgLACgMgBQgbABgQgPgAAVgMIgBgJQgCgGgFgDQgEgEgHAAQgHAAgFADQgEAFgCAEQgDAGAAAEIAoAAIAAAAg");
	this.shape_29.setTransform(103.6,19.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#19628D").s().p("AAeBLIgBglIhXAAIAAhwIAjAAIAABWIAiAAIAAhWIAjAAIAABYIAMAAIgBA9g");
	this.shape_30.setTransform(91.2,21);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#19628D").s().p("AAVA5IAAgqIgHAAQgFAAgEACQgEACgCAEQgEAEgDAHIgFAOIgCAEIgDAFIglAAIAEgGIADgHIAEgKIAFgLIAHgJIAGgGQAEgCAEgBIAAAAQgGgBgHgEQgHgBgEgHQgFgFAAgJQAAgKAGgHQAFgGAIgEQAIgEALgCQAKgBAMAAIAYABIATABIAABvgAgFgfQgFADgBAIQAAAFAEADQADADAEACQAEABAGAAIAGAAIAFAAIAAgcIgFgBIgHAAQgIABgGADg");
	this.shape_31.setTransform(77,19.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#19628D").s().p("AgRAzQgNgGgHgNQgHgNgBgRQABgQAHgNQAIgOANgIQAPgIAUgBIAOABIAMAEIgFAaIgIgDIgMgBQgOABgGAIQgJAJAAANQAAAKAEAHQAFAHAGAEQAGAEAJgBIAMgBIAJgCIADAaIgMADQgJACgKgBQgRABgOgIg");
	this.shape_32.setTransform(66.2,19.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#19628D").s().p("AgkAsQgQgQgBgaQABgKADgLQADgKAIgJQAGgJALgFQALgFANgBQATABALAIQAKAIAFANQAGAMAAAOIgBAIIAAAFIhIAAQAAAIAFAEQAEAFAIACQAGADAHAAQAKAAAHgCIAPgDIAEAXQgIAEgLACQgKACgLgBQgcABgPgPgAAVgMIgCgJQgBgGgFgDQgDgEgJAAQgGAAgEADQgFAFgDAEQgCAGAAAEIAoAAIAAAAg");
	this.shape_33.setTransform(54.9,19.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#19628D").s().p("AAoA4IgBgtIgBgLIAAgNIAAgOIgBAAIgEAMIgDAKIgEAOIgPAtIgYAAIgOgsIgDgLIgDgNIgDgMIgBAAIgBAVIgBARIgBAsIggAAIAIhvIAtAAIAMAqIAEANIADAPIABAAIAEgPIAFgPIAMgoIAsAAIAHBvg");
	this.shape_34.setTransform(40.5,19.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#19628D").s().p("Ag0BMIAAgVIATgSIAcgZQAJgLAGgJQAFgJAAgIQAAgJgGgHQgFgGgNAAQgJAAgJAEIgNAIIgKgZQAIgGAMgFQANgDAPgBQAQAAAMAGQAMAGAGAKQAGALAAAOQAAANgGAKQgFAKgJALIgUATIgNAMIAAAAIA4AAIAAAdg");
	this.shape_35.setTransform(21.2,17.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#19628D").s().p("AAABLIAAh2IgbAOIgGgaIAngTIAcAAIAACVg");
	this.shape_36.setTransform(7.5,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,194.8,77.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvEOIAAobMAlfAAAIAAIbg");
	this.shape.setTransform(120,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,240,54), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19628D").s().p("AgMAhQgGgEgDgGQgCgHAAgKQAAgJACgIQAEgIAFgGQAFgEAFgDQAGgCAGgBIAEgBIAEAAIAAAIIgEAAIgEABQgHABgFAEQgFADgDAGQgDAFgBAGIAAAAQADgEAFgCQAEgCAFAAQAGAAAFACQAFADACAFQADAFAAAHQAAAGgDAGQgDAGgFADQgFAEgHAAQgHAAgGgEgAgHgBQgEACgCAEIgBACIAAACQAAAGABAEQACAFAEADQADACAFAAQAGAAAEgEQADgFAAgIQAAgHgDgFQgFgDgGAAQgDAAgEACg");
	this.shape.setTransform(169.3,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19628D").s().p("AgFAGIACgJIACgJIAKgBIgDAKIgFAJIgCAHIgGABIACgIg");
	this.shape_1.setTransform(162.9,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#19628D").s().p("AAOAbIAAgXIgIAAIgFABIgDACIgDAFIgDAFIgBAFIgCADIgBACIgKAAIACgDIABgDIACgGIADgFIAEgFIACgCIAEgBIAAAAIgHgCQgDgBgCgDQgCgCAAgFQAAgEACgDQACgCADgCQADgCAFgBIAJgBIAJABIAIABIAAAzgAgBgTQgDABgCACQgCACAAAEQAAADACADQADACADAAIAFABIAFAAIAEAAIAAgSIgFAAIgEgBIgGABg");
	this.shape_2.setTransform(158.8,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#19628D").s().p("AgNAaIgGgGQgBgDAAgEQAAgKAIgEQAIgFAPAAIAAgBIgBgFQAAgDgEgCQgCgCgEAAIgHABQgEABgDACIgCgHQADgCAFgBIAIgCQAIABAFADQAEADACAFQABAFABAFIAAATIAAAHIAAAGIgIAAIgBgHIgHAGQgEACgFAAQgFAAgEgCgAABAAQgFABgDADQgEACAAAGQAAAEADADQADACADAAQAFAAADgDQAEgDABgDIAAgCIAAgBIAAgJIgEAAIgGAAg");
	this.shape_3.setTransform(153.6,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19628D").s().p("AgOAbIgHAAIAAg0IAIgBIAJAAIAHAAIAIACIAGAEQACADAAAEQAAAFgDADQgDADgFABIAAABQAGAAAEADQADADABAGQgBAFgCADQgDADgFACIgJACIgHAAIgJAAgAgLAUIADABIAEAAIAHgBIAGgDQADgCAAgDQAAgEgDgCQgCgCgEgBIgHgBIgHAAgAgLgTIAAAQIAHAAIAGgBIAFgDQADgBAAgEQAAgDgEgCQgDgCgHAAIgEAAIgDAAg");
	this.shape_4.setTransform(148.5,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19628D").s().p("AgNAZQgFgEgEgGQgDgGAAgIQAAgIAEgHQADgGAGgDQAGgDAHgBQAHABAGADQAGADADAGQADAHAAAHQAAAHgCAFQgCAGgEADQgEAEgFABQgFACgEAAQgHAAgGgDgAgIgQQgDADgCAEQgCAFAAAEQAAAGACAFQACAEAEADQAEADADAAQAFAAAEgDQADgDACgEQACgFABgGQAAgEgDgEQgBgFgDgDQgEgDgFAAQgFAAgEADg");
	this.shape_5.setTransform(142.5,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19628D").s().p("AATAjIgBgRIgjAAIgBARIgHAAIgBgYIAEAAQAEgGACgFIACgKIABgLIAAgNIAiAAIAAAtIAGAAIgBAYgAgFgSIAAALIgCAIIgDAFIgCAFIAYAAIAAgmIgRAAg");
	this.shape_6.setTransform(136.5,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#19628D").s().p("AgNAaIgGgGQgBgDAAgEQAAgKAIgEQAJgFAOAAIAAgBIgBgFQgBgDgDgCQgCgCgEAAIgIABQgEABgCACIgDgHQAEgCAEgBIAJgCQAIABAFADQAEADACAFQACAFAAAFIAAATIAAAHIAAAGIgIAAIgBgHIgHAGQgEACgFAAQgFAAgEgCgAAAAAQgEABgDADQgDACgBAGQABAEACADQADACADAAQAFAAADgDQADgDACgDIAAgCIAAgBIAAgJIgEAAIgHAAg");
	this.shape_7.setTransform(130.9,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#19628D").s().p("AgKAiQgIgEgEgJQgFgIAAgMQAAgLAFgJQAFgIAIgFQAJgFAKAAIAMABIAGACIgCAIIgHgCIgIgBQgJAAgFAEQgHADgEAHQgDAHAAAJQAAAJADAGQAEAHAGAEQAFADAJAAIAJgBIAHgCIACAIIgIACIgMABQgJAAgJgEg");
	this.shape_8.setTransform(125.2,21.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19628D").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABACABACQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_9.setTransform(118.6,25.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19628D").s().p("AgXATIADAAIADgCQADgDABgFIABgOIAAgVIAkAAIAAA0IgKAAIAAgtIgRAAIAAAOQAAAKgCAHQgBAIgFADIgFADIgGABg");
	this.shape_10.setTransform(114.2,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#19628D").s().p("AgVAfIAEgCIAFgDIADgEQADgDACgEIAAgBIABgBIgBgBIAAgBIgUgxIALAAIALAgIACAFIAAAFIABAAIACgFIABgFIALggIAKAAIgPAmIgGAOIgFALIgGAHIgGAFIgGACg");
	this.shape_11.setTransform(109.2,24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#19628D").s().p("AgFAGIACgJIACgJIAJgBIgCAKIgEAJIgDAHIgHABIADgIg");
	this.shape_12.setTransform(103,25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#19628D").s().p("AgKAYQgGgDgDgGQgDgGAAgIQAAgHADgHQACgGAHgEQAFgDAGgBQAHABAFACQAEACACAEIAEAIIABAIIAAACIAAACIglAAQAAAGADAEQACAFAEABQAEACAEAAIAJAAIAGgCIABAHIgGACIgLABQgIAAgFgEgAAPgEIgBgHQgCgDgDgDQgDgDgFAAQgEAAgDADQgEACgBAEIgCAHIAcAAIAAAAg");
	this.shape_13.setTransform(99.2,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#19628D").s().p("AgNAZQgFgEgEgGQgDgGAAgIQABgIADgHQADgGAGgDQAGgDAHgBQAHABAGADQAGADADAGQADAHAAAHQAAAHgCAFQgCAGgEADQgEAEgFABQgEACgFAAQgGAAgHgDgAgIgQQgDADgCAEQgCAFAAAEQAAAGACAFQACAEAEADQAEADADAAQAFAAAEgDQADgDACgEQACgFABgGQgBgEgCgEQgBgFgDgDQgEgDgFAAQgGAAgDADg");
	this.shape_14.setTransform(93.4,23);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19628D").s().p("AAMAaIgDgEIgCgGQgDgHgEgDQgDgDgHAAIgCAAIAAAXIgJAAIAAg0IAJAAIAAAYIADAAIATgYIAMAAIgXAYQAGABAEADQAEAEADAIIADAFIADAHg");
	this.shape_15.setTransform(88.1,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#19628D").s().p("AgHAYQgHgDgCgGQgEgGAAgIQAAgHAEgHQADgGAHgEQAGgDAIgBIAIABIAFACIgCAIIgFgCIgGgBQgGAAgDADQgEADgDAEQgCAFAAAEQAAAGADAFQACAEAEADQADACAGAAIAGgBIAFgBIACAHIgGACIgKABQgHAAgFgEg");
	this.shape_16.setTransform(82.7,23);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#19628D").s().p("AgOAbIgHAAIAAg0IAIgBIAJAAIAHAAIAIACIAGAEQACADAAAEQAAAFgDADQgDADgFABIAAABQAGAAAEADQADADABAGQgBAFgCADQgDADgFACIgJACIgHAAIgJAAgAgLAUIADABIAEAAIAHgBIAGgDQADgCAAgDQAAgEgDgCQgCgCgEgBIgHgBIgHAAgAgLgTIAAAQIAHAAIAGgBIAFgDQADgBAAgEQAAgDgEgCQgDgCgHAAIgEAAIgDAAg");
	this.shape_17.setTransform(77.6,23);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#19628D").s().p("AgKAYQgGgDgDgGQgEgGABgIQAAgHACgHQAEgGAFgEQAGgDAHgBQAGABAFACQAEACACAEIAEAIIAAAIIAAACIAAACIgkAAQAAAGACAEQADAFAEABQAEACAEAAIAJAAIAGgCIACAHIgHACIgLABQgHAAgGgEgAAOgEIAAgHQgCgDgDgDQgDgDgFAAQgEAAgDADQgDACgCAEIgCAHIAbAAIAAAAg");
	this.shape_18.setTransform(71.9,23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#19628D").s().p("AANAaIAAgYIgZAAIAAAYIgJAAIAAg0IAJAAIAAAVIAZAAIAAgVIAKAAIAAA0g");
	this.shape_19.setTransform(66.2,23);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#19628D").s().p("AAMAbIAAgWIgBAAQgDACgDABIgIABQgFAAgEgBQgDgCgDgEQgCgDAAgGIAAgTIAKAAIAAASQAAAFACADQADACAFAAIAGgBIAGgBIAAgaIAJAAIAAA1g");
	this.shape_20.setTransform(60.3,23);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#19628D").s().p("AgNAZQgFgEgDgGQgEgGAAgIQAAgIAEgHQADgGAGgDQAGgDAHgBQAHABAGADQAFADAEAGQADAHAAAHQAAAHgCAFQgDAGgEADQgDAEgFABQgEACgFAAQgHAAgGgDgAgIgQQgDADgCAEQgCAFAAAEQAAAGACAFQACAEAEADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgGQAAgEgCgEQgBgFgDgDQgEgDgFAAQgGAAgDADg");
	this.shape_21.setTransform(54.5,23);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#19628D").s().p("AAPAlIgEgIIgDgJQgCgGgCgDQgDgEgDgCQgEgCgFAAIgDAAIAAAiIgKAAIAAhJIAKAAIAAAhIADAAIAYghIALAAIgbAiQAGABADABQAEADADAEIAEAJIAEALIAEAKg");
	this.shape_22.setTransform(48.9,22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#19628D").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgCACgCQACgCACAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABACABACQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_23.setTransform(42.1,25.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#19628D").s().p("AgIAYQgGgDgDgGQgDgGAAgIQAAgHADgHQAEgGAGgEQAHgDAIgBIAIABIAFACIgCAIIgEgCIgHgBQgHAAgCADQgEADgDAEQgCAFAAAEQAAAGACAFQADAEAEADQADACAFAAIAIgBIAEgBIACAHIgGACIgJABQgHAAgHgEg");
	this.shape_24.setTransform(38.4,23);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#19628D").s().p("AgFAGIACgJIACgJIAJgBIgDAKIgDAJIgDAHIgHABIADgIg");
	this.shape_25.setTransform(204.7,12.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#19628D").s().p("AANAaIAAgXIgZAAIAAAXIgJAAIAAg0IAJAAIAAAWIAZAAIAAgWIAKAAIAAA0g");
	this.shape_26.setTransform(200.6,9.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#19628D").s().p("AgMAZQgGgEgDgGQgEgGAAgIQABgIADgHQADgGAGgDQAGgDAGgBQAIABAGADQAGADADAGQADAHAAAHQAAAHgCAFQgDAGgEADQgDAEgFABQgFACgEAAQgGAAgGgDgAgIgQQgEADgBAEQgCAFAAAEQAAAGACAFQACAEAEADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgGQAAgEgBgEQgCgFgEgDQgDgDgGAAQgEAAgEADg");
	this.shape_27.setTransform(194.6,9.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#19628D").s().p("AAOAlIAAgWIAAgIIAAgHIAAgGIgEAIIgFAHIgHAOIgIAOIgMAAIAAg0IAKAAIAAAWIAAAIIgBAGIAAAHIADgFIADgGIADgFIAQgbIALAAIAAA0gAgHgZQgDgCgBgCIgCgIIAHAAQAAAFACACQACACACAAQADAAACgCQACgDAAgEIAHAAQAAAHgEAEQgEAEgGAAIgHgDg");
	this.shape_28.setTransform(188.5,8.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#19628D").s().p("AgNAaIgFgGQgCgDAAgEQAAgKAIgEQAJgFAOAAIAAgBIgBgFQAAgDgDgCQgDgCgEAAIgHABQgEABgDACIgDgHQAEgCAFgBIAIgCQAIABAEADQAFADACAFQACAFgBAFIAAATIAAAHIABAGIgJAAIgBgHIgGAGQgEACgFAAQgFAAgEgCgAAAAAQgDABgEADQgEACABAGQAAAEACADQADACAEAAQAEAAADgDQADgDABgDIABgCIAAgBIAAgJIgEAAIgHAAg");
	this.shape_29.setTransform(182.7,9.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#19628D").s().p("AgYAmIAAg5IAAgJIAAgIIAIAAIABAJQADgFAEgCQAGgDAFAAQAHAAAEADQAFAEAEAGQACAGAAAIQABAJgEAGQgDAGgGADQgGADgGAAQgEAAgFgCQgEgCgCgEIAAAAIAAAdgAgIgaQgEADgBAFIgBACIAAACIAAAKIAAACIAAACQABAEAEADQAFADAEAAQAFAAADgDQAEgCACgFQACgEgBgGQABgFgCgEQgCgFgEgDQgDgCgFAAQgEAAgEADg");
	this.shape_30.setTransform(177.2,10.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#19628D").s().p("AAOAlIAAgWIAAgIIAAgHIAAgGIgEAIIgFAHIgHAOIgIAOIgMAAIAAg0IAKAAIAAAWIAAAIIgBAGIAAAHIADgFIADgGIADgFIAQgbIALAAIAAA0gAgHgZQgDgCgBgCIgCgIIAHAAQAAAFACACQACACACAAQADAAACgCQACgDAAgEIAHAAQAAAHgEAEQgEAEgGAAIgHgDg");
	this.shape_31.setTransform(168.5,8.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#19628D").s().p("AAOAaIAAgWIAAgHIAAgHIAAgHIgEAJIgFAHIgHANIgIAOIgMAAIAAg0IAKAAIAAAXIAAAHIgBAGIAAAHIADgFIADgGIADgFIAQgbIALAAIAAA0g");
	this.shape_32.setTransform(162.4,9.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#19628D").s().p("AAMAaIgDgEIgCgHQgDgGgEgDQgDgDgGAAIgCAAIAAAXIgKAAIAAg0IAKAAIAAAXIACAAIATgXIALAAIgVAYQAFABAEADQAFAEADAIIACAGIADAGg");
	this.shape_33.setTransform(157.1,9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#19628D").s().p("AgHAYQgHgDgCgGQgEgGAAgIQAAgHAEgHQADgGAHgEQAGgDAIgBIAHABIAGACIgCAIIgFgCIgGgBQgGAAgEADQgEADgCAEQgCAFAAAEQAAAGADAFQACAEAEADQADACAFAAIAHgBIAGgBIABAHIgGACIgKABQgGAAgGgEg");
	this.shape_34.setTransform(151.7,9.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#19628D").s().p("AgYAmIAAg5IAAgJIgBgIIAJAAIABAJQADgFAEgCQAFgDAGAAQAGAAAGADQAEAEADAGQAEAGAAAIQgBAJgDAGQgEAGgFADQgGADgGAAQgEAAgFgCQgDgCgDgEIgBAAIAAAdgAgIgaQgFADgBAFIAAACIgBACIAAAKIAAACIABACQACAEAEADQAEADAEAAQAFAAAEgDQADgCACgFQACgEAAgGQAAgFgCgEQgCgFgDgDQgEgCgFAAQgEAAgEADg");
	this.shape_35.setTransform(146.2,10.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#19628D").s().p("AAOAbIAAgXIgIAAIgFABIgDADIgDAEIgDAFIgBAFIgCADIgBACIgKAAIACgDIABgDIACgFIADgGIAEgFIACgCIAEgBIAAgBIgHgBQgDgBgCgDQgCgCAAgEQAAgFACgCQACgDADgCQADgCAFgBIAJgBIAJABIAIAAIAAA0gAgBgSQgDAAgCACQgCACAAAEQAAADACACQADACADABIAFABIAFAAIAEAAIAAgSIgFAAIgEAAIgGABg");
	this.shape_36.setTransform(139.9,9.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#19628D").s().p("AgNAZQgFgEgEgGQgDgGAAgIQABgIADgHQADgGAGgDQAGgDAHgBQAHABAGADQAFADAEAGQADAHAAAHQAAAHgCAFQgCAGgEADQgEAEgFABQgFACgEAAQgGAAgHgDgAgIgQQgDADgCAEQgCAFAAAEQAAAGACAFQACAEAEADQAEADADAAQAFAAAEgDQADgDACgEQACgFABgGQAAgEgDgEQgBgFgDgDQgEgDgFAAQgFAAgEADg");
	this.shape_37.setTransform(134.4,9.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#19628D").s().p("AgXATIADgBIADgBQADgDABgFIABgOIAAgVIAkAAIAAA0IgJAAIAAgsIgSAAIAAANQAAAKgCAHQgBAIgFAEIgFACIgGABg");
	this.shape_38.setTransform(128.2,9.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#19628D").s().p("AgKAYQgGgDgDgGQgDgGgBgIQAAgHADgHQAEgGAFgEQAGgDAHgBQAGABAEACQAFACACAEIADAIIABAIIAAACIAAACIgkAAQAAAGACAEQADAFAEABQAEACAEAAIAJAAIAGgCIABAHIgHACIgKABQgIAAgFgEgAAOgEIgBgHQgBgDgDgDQgCgDgGAAQgEAAgDADQgEACgBAEIgCAHIAbAAIAAAAg");
	this.shape_39.setTransform(123.1,9.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#19628D").s().p("AgRAlIgGAAIAAhJIApAAIAAAIIgfAAIAAAUIAEgBIAFAAIAKABQAFABADADQAEADADADQADAFAAAGQAAAFgCAEQgCAEgCADQgFAFgHACQgGABgIAAIgJAAgAgNAdIAEABIAEAAIAHgBQAFgCACgDIADgEIACgHQAAgEgCgDQgBgDgDgCQgDgBgEgBIgHgBIgDABIgEAAg");
	this.shape_40.setTransform(117.5,8.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#19628D").s().p("AgFAGIACgJIACgJIAJgBIgDAKIgDAJIgDAHIgGABIACgIg");
	this.shape_41.setTransform(110.7,12.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#19628D").s().p("AgOAbIgHgBIAAg0IAKAAIAAASIAEAAIAFgBQAFAAAGACQAFABAEAEQADADABAHQAAAFgCADQgBADgDACQgDACgEABIgIACIgHABIgIAAgAgLgBIAAAUIADABIAEAAIAHgBQAEgBACgDQADgCAAgEQAAgFgDgCQgDgCgDgBIgHgBIgEAAIgDABg");
	this.shape_42.setTransform(107.1,9.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#19628D").s().p("AgEAaIAAgsIgRAAIAAgIIAqAAIAAAIIgQAAIAAAsg");
	this.shape_43.setTransform(101.9,9.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#19628D").s().p("AgHAYQgHgDgCgGQgEgGAAgIQAAgHAEgHQADgGAHgEQAGgDAIgBIAHABIAGACIgCAIIgFgCIgGgBQgGAAgEADQgEADgCAEQgCAFAAAEQAAAGADAFQACAEAEADQADACAFAAIAHgBIAGgBIABAHIgGACIgKABQgGAAgGgEg");
	this.shape_44.setTransform(97.2,9.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#19628D").s().p("AgNAaIgGgGQgBgDAAgEQAAgKAIgEQAIgFAPAAIAAgBIgBgFQAAgDgEgCQgCgCgEAAIgHABQgEABgDACIgCgHQADgCAFgBIAIgCQAIABAFADQAEADACAFQABAFABAFIAAATIAAAHIAAAGIgIAAIgBgHIgHAGQgEACgFAAQgFAAgEgCgAABAAQgFABgDADQgEACAAAGQAAAEADADQADACADAAQAFAAADgDQAEgDABgDIAAgCIAAgBIAAgJIgEAAIgGAAg");
	this.shape_45.setTransform(91.9,9.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#19628D").s().p("AgXATIADgBIACgBQAEgDABgFIABgOIAAgVIAkAAIAAA0IgJAAIAAgsIgSAAIAAANQAAAKgBAHQgCAIgFAEIgFACIgGABg");
	this.shape_46.setTransform(86.2,9.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#19628D").s().p("AgLAlQgFgDgCgFQgDgFgCgHIgBgNQAAgIACgHQACgHAEgGQAEgFAGgDQAFgDAHgCIAHgBIAGgCIAAAJIgFABIgGABQgHABgDADQgFACgDAEIgEAIIgCAKQADgGAFgDQAFgDAFAAQAHAAAFADQAFADADAFQADAGAAAIQAAAJgDAGQgDAGgGAEQgFADgIAAQgGAAgFgDgAgGgEIgFAEIgCAFIgBAHIABAHQABADACADIAEAGQADACADAAQAGAAADgDQADgDABgEQACgFAAgFIgBgJQgCgEgDgDQgDgDgGAAQgDAAgDACg");
	this.shape_47.setTransform(81,8.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#19628D").s().p("AgNAZQgFgEgEgGQgDgGAAgIQABgIADgHQADgGAGgDQAGgDAHgBQAHABAGADQAFADAEAGQADAHAAAHQAAAHgCAFQgCAGgEADQgEAEgFABQgFACgEAAQgGAAgHgDgAgIgQQgDADgCAEQgCAFAAAEQAAAGACAFQACAEAEADQAEADADAAQAFAAAEgDQADgDACgEQACgFABgGQAAgEgDgEQgBgFgDgDQgEgDgFAAQgFAAgEADg");
	this.shape_48.setTransform(75,9.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#19628D").s().p("AANAbIAAgXIgHAAIgFABIgDADIgDAEIgCAFIgCAFIgCADIgBACIgKAAIACgDIABgDIADgFIACgGIAEgFIADgCIADgBIAAgBIgHgBQgDgBgCgDQgCgCAAgEQAAgFACgCQACgDADgCQADgCAFgBIAJgBIAJABIAIAAIAAA0gAgBgSQgDAAgCACQgCACAAAEQAAADACACQACACAEABIAFABIAFAAIADAAIAAgSIgDAAIgFAAIgGABg");
	this.shape_49.setTransform(66.6,9.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#19628D").s().p("AgNAaIgFgGQgCgDAAgEQAAgKAIgEQAIgFAPAAIAAgBIgBgFQAAgDgEgCQgCgCgEAAIgHABQgFABgCACIgCgHQADgCAFgBIAIgCQAIABAEADQAFADACAFQABAFABAFIAAATIAAAHIAAAGIgJAAIgBgHIgGAGQgEACgFAAQgFAAgEgCgAABAAQgEABgEADQgEACAAAGQAAAEADADQADACADAAQAFAAADgDQADgDACgDIAAgCIAAgBIAAgJIgEAAIgGAAg");
	this.shape_50.setTransform(61.4,9.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#19628D").s().p("AAMAaIgDgEIgCgHQgCgGgFgDQgDgDgGAAIgCAAIAAAXIgKAAIAAg0IAKAAIAAAXIACAAIATgXIALAAIgVAYQAFABAEADQAFAEADAIIACAGIADAGg");
	this.shape_51.setTransform(56.7,9.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#19628D").s().p("AgIAYQgFgDgEgGQgDgGAAgIQAAgHADgHQAEgGAHgEQAGgDAIgBIAHABIAGACIgCAIIgFgCIgGgBQgHAAgDADQgDADgDAEQgCAFAAAEQAAAGACAFQADAEAEADQADACAFAAIAHgBIAGgBIABAHIgGACIgKABQgHAAgGgEg");
	this.shape_52.setTransform(51.2,9.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#19628D").s().p("AgOAbIgHAAIAAg0IAIgBIAJAAIAHAAIAIACIAGAEQACADAAAEQAAAFgDADQgDADgFABIAAABQAGAAAEADQADADABAGQgBAFgCADQgDADgFACIgJACIgHAAIgJAAgAgLAUIADABIAEAAIAHgBIAGgDQADgCAAgDQAAgEgDgCQgCgCgEgBIgHgBIgHAAgAgLgTIAAAQIAHAAIAGgBIAFgDQADgBAAgEQAAgDgEgCQgDgCgHAAIgEAAIgDAAg");
	this.shape_53.setTransform(46.1,9.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#19628D").s().p("AgNAZQgFgEgEgGQgDgGAAgIQAAgIAEgHQADgGAGgDQAGgDAHgBQAHABAGADQAFADAEAGQADAHAAAHQAAAHgCAFQgCAGgEADQgEAEgFABQgEACgFAAQgGAAgHgDgAgIgQQgDADgCAEQgCAFAAAEQAAAGACAFQACAEAEADQADADAEAAQAFAAAEgDQADgDACgEQACgFAAgGQAAgEgCgEQgBgFgDgDQgEgDgFAAQgGAAgDADg");
	this.shape_54.setTransform(40.2,9.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#19628D").s().p("AgXATIADgBIADgBQADgDABgFIABgOIAAgVIAkAAIAAA0IgKAAIAAgsIgRAAIAAANQAAAKgCAHQgBAIgFAEIgEACIgHABg");
	this.shape_55.setTransform(34,9.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#19628D").s().p("AASAjIAAgRIgkAAIAAARIgIAAIAAgYIAFgBQADgEABgGIADgJIABgMIAAgNIAjAAIAAAsIAFABIgBAYgAgFgSIgBALIgCAIIgCAFIgBAEIAXAAIAAglIgRAAg");
	this.shape_56.setTransform(28.5,10.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#19628D").s().p("AgYAmIAAg5IAAgJIgBgIIAJAAIABAJQADgFAEgCQAGgDAFAAQAHAAAFADQAFAEADAGQACAGAAAIQAAAJgDAGQgDAGgGADQgGADgGAAQgEAAgFgCQgEgCgCgEIAAAAIAAAdgAgIgaQgFADAAAFIgBACIAAACIAAAKIAAACIAAACQABAEAEADQAFADAEAAQAFAAADgDQAEgCACgFQABgEAAgGQAAgFgBgEQgCgFgEgDQgDgCgFAAQgEAAgEADg");
	this.shape_57.setTransform(22.8,10.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#19628D").s().p("AgKAYQgGgDgDgGQgEgGAAgIQABgHADgHQACgGAHgEQAFgDAGgBQAHABAEACQAFACACAEIAEAIIABAIIAAACIAAACIglAAQAAAGADAEQACAFAEABQAEACAEAAIAJAAIAGgCIABAHIgGACIgLABQgHAAgGgEgAAPgEIgBgHQgCgDgDgDQgDgDgFAAQgEAAgDADQgDACgCAEIgCAHIAcAAIAAAAg");
	this.shape_58.setTransform(16.7,9.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#19628D").s().p("AgOAbIgHAAIAAg0IAIgBIAJAAIAHAAIAIACIAGAEQACADAAAEQAAAFgDADQgDADgFABIAAABQAGAAAEADQADADABAGQgBAFgCADQgDADgFACIgJACIgHAAIgJAAgAgLAUIADABIAEAAIAHgBIAGgDQADgCAAgDQAAgEgDgCQgCgCgEgBIgHgBIgHAAgAgLgTIAAAQIAHAAIAGgBIAFgDQADgBAAgEQAAgDgEgCQgDgCgHAAIgEAAIgDAAg");
	this.shape_59.setTransform(11.4,9.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#19628D").s().p("AgKAiQgIgEgEgJQgFgIAAgMQAAgLAFgJQAFgIAIgFQAJgFAKAAIAMABIAGACIgCAIIgHgCIgIgBQgJAAgFAEQgHADgEAHQgDAHAAAJQAAAJADAGQAEAHAGAEQAFADAJAAIAJgBIAHgCIACAIIgIACIgMABQgJAAgJgEg");
	this.shape_60.setTransform(5.3,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,208,30.4), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApgIoQiRAAAAiQIAAsvQAAiQCRAAITBAAQCQAAAACQIAAMvQAACQiQAAg");
	mask.setTransform(75.4,55.3);

	// Слой_1
	this.instance = new lib.Символ18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75.4,55.3,0.457,0.457,0,0,0,165,121);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,150.7,110.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.Символ17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(235.7,111.5,1,1,0,0,0,56.1,16.1);

	this.instance_1 = new lib.Символ21("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(235.7,111.5,1,1,0,0,0,56.1,16.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:139.7},10,cjs.Ease.get(1)).wait(82).to({startPosition:0},0).to({x:235.7},12,cjs.Ease.get(-1)).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({x:139.7},9,cjs.Ease.get(1)).wait(64));

	// Слой_1
	this.instance_2 = new lib.Символ16("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.9,-22.4,1,1,0,0,0,46.5,12.4);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Символ15("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(76.9,-22.4,1,1,0,0,0,31.5,12.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Символ20("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.9,-17.4,1,1,0,0,0,72.9,17.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14,cjs.Ease.get(1)).wait(20).to({startPosition:0},0).to({alpha:0},12,cjs.Ease.get(-1)).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).to({alpha:0},12,cjs.Ease.get(-1)).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(105).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(1)).wait(60));

	// Символ 8
	this.instance_5 = new lib.Символ8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-102.1,56.7,0.466,0.466,0,0,0,165.3,121.4);

	this.instance_6 = new lib.Символ7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-89.4,56.5,0.406,0.406,0,0,0,165.1,139);
	this.instance_6._off = true;

	this.instance_7 = new lib.Символ19("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-91.3,70.9,1,1,0,0,0,84,65.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:77.1},14,cjs.Ease.get(1)).wait(20).to({x:262.7},12,cjs.Ease.get(-1)).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).to({x:77},14,cjs.Ease.get(1)).wait(31).to({x:244},12,cjs.Ease.get(-1)).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105).to({_off:false},0).to({x:87.9},13,cjs.Ease.get(1)).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.2,-34.8,471,162.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(150.3,14.4,1,1,0,0,0,150.3,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,-3,300.5,31.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(107.5,53.8,1,1,0,0,0,97.4,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(10.1,15,194.8,77.5), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(129.3,35.4,1,1,0,0,0,113.3,16.4);

	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,37,1,1,0,0,0,120,27);
	this.instance_1.alpha = 0.57;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,10,240,54), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(104.3,100.1,0.694,0.694,0,0,0,150.3,14.5);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.1,37,1.478,1.478,0,0,0,22.7,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,-0.1,208.6,109.9), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(120,373,1,1,0,0,0,120,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(271));

	// Layer 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.3,-62,1,1,0,0,0,104.3,55);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:78},17,cjs.Ease.get(1)).wait(222).to({alpha:0},16,cjs.Ease.get(-1)).wait(1));

	// Слой_7
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,236.3,1.565,1.565,0,0,0,107.4,53.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).to({regX:107.5,regY:53.8,scaleX:1,scaleY:1,x:120.1,y:236.1,alpha:1},21,cjs.Ease.cubicInOut).wait(24).to({alpha:0},17,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// Слой_8
	this.instance_3 = new lib.Символ14("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.1,254.1,1.247,1.247,0,0,0,76.9,56.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105).to({_off:false},0).wait(149).to({startPosition:149},0).to({alpha:0,startPosition:165},16,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200,1,2.702,0,0,0,120,74);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({alpha:0.602},15,cjs.Ease.get(1)).wait(217).to({alpha:0},16,cjs.Ease.get(-1)).wait(1));

	// Слой_2
	this.instance_5 = new lib.bg_();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(271));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,480);


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
p.nominalBounds = new cjs.Rectangle(119,199,242,481);
// library properties:
lib.properties = {
	id: '2EDAFFA3DB927A42B15A736DA13BA92B',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./index_atlas_NP_.jpg", id:"index_atlas_NP_"}
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
an.compositions['2EDAFFA3DB927A42B15A736DA13BA92B'] = {
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