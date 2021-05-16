import { Vue, Component, Prop } from 'vue-property-decorator'
import HelloWorldTsx from './helloWorld-tsx'


@Component({
    components: {HelloWorldTsx},
})
export default class MessageTsx extends Vue {
  @Prop(String) private name!: string
  // @Prop({ type:  Object as ()=>IName,default:{age:1}}) ss!:IName
  //  @Prop({ type: Array as Prop<string[]>}) s1
  private render() {
      return (<div>
          <HelloWorldTsx></HelloWorldTsx>
          {this.name}
      </div>)
  }
}
