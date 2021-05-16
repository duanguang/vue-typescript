import { Vue, Component, Prop } from 'vue-property-decorator'
/* import * as tsx from 'vue-tsx-support'; */
import "vue-tsx-support/enable-check"
@Component
export default class HelloWorldTsx extends Vue {
   private _tsx!: {
        // specify props type to `props`.
        props: Pick<HelloWorldTsx, "name" >,
      };
  @Prop({
      required: true,
  }) public name!: string
  // @Prop({ type:  Object as ()=>IName,default:{age:1}}) ss!:IName
  //  @Prop({ type: Array as Prop<string[]>}) s1
  private render() {
    return(<span>{this.name}</span>)
  }
}
