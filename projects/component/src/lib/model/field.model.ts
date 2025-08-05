import { FieldType } from "./constants";
//var jmespath = require('jmespath');
// jmespath.search({foo: {bar: {baz: [0, 1, 2, 3, 4]}}}, "foo.bar.baz[2]")

export class Field {
 type: FieldType;
 value:string;
}
