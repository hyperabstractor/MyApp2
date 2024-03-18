import SingleLineText from "~/tpl/SingleLineText"
import QuickForm from "~/tpl/QuickForm"
export default function Page1() {
	return (<div class={"p-4 flex flex-col w-full h-full"}><QuickForm title={"Form Title"} loader={null} action={null} columns={1} submit={"Submit"} _droppable={true}>{ (values) => <div ><SingleLineText name={""} value={""} label={"Text Input"} placeholder={"Enter text..."} required={false} span={1} /></div>}</QuickForm></div>)
}