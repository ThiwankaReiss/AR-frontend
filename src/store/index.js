import { geometry } from "maath";
import { proxy } from "valtio";
const state=proxy({
    customer:null,
    navButton:1,
    themeColor:'#152238',
    geometry:null,
    order:null
});
export default state;