function AVector(x, y) {
    this.x = x;
    this.y = y;
}

AVector.prototype = {
    add: function(v, a="n") {
        if (v instanceof AVector) {
            this.x += v.x;
            this.y += v.y;
        } else {
            if (typeof a == "number") {
                this.x += v;
                this.y += a;
            } else if (typeof v == "number") {
                this.x += v;
                this.y += v;
            }
        }
        return this;
    },
    sub: function(v, a="n") {
        if (v instanceof AVector) {
            this.x -= v.x;
            this.y -= v.y;
        } else {
            if (typeof a == "number") {
                this.x -= v;
                this.y -= a;
            } else if (typeof v == "number") {
                this.x -= v;
                this.y -= v;
            }
        }
        return this;
    },
    mult: function(v, a="x") {
        if (typeof v == "number") {
            if (typeof a == "number") {
                this.x *= v;
                this.y *= a;
            } else {
                this.x *= v;
                this.y *= v;
            }
        }
        return this;
    },
    div: function(v, a="x") {
        if (typeof v == "number") {
            if (typeof a == "number") {
                this.x /= v;
                this.y /= a;
            } else {
                this.x /= v;
                this.y /= v;
            }
        }
        return this;
    }
}

// Test
let v = new AVector(1, 1);

v.mult(5, 2);

write(v);