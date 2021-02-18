function AVector(x, y) {
    this.x = x;
    this.y = y;
}

AVector.prototype = {
    add: function(v, a="x") {
        if (v instanceof AVector) {
            this.x += v.x;
            this.y += v.y;
        } else {
            if (typeof a == "number") {
                this.x += v;
                this.y += a;
            } else {
                this.x += v;
                this.y += v;
            }
        }
        return this;
    },
    subtract: function(v) {
        if (v instanceof AVector) {
            this.x -= v.x;
            this.y -= v.y;
        } else {
            this.x -= v;
            this.y -= v;
        }
        return this;
    }
}

let v = new AVector(1, 1);
v.add(1, 2);
write(v);