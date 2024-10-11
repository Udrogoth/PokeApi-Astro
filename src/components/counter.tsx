import { children, createSignal, type Component, type JSXElement } from "solid-js"

interface Props {
    initValue: number;
    children: JSXElement;
}

export const Counter: Component<Props> = (props) => {
    // export const Counter= (props: Props) => {
    const [counter, SetCounter] = createSignal(props.initValue)


    return (
        <>
            {/* <h1 class="text-5xl">Counter</h1> */}
            {props.children}
            <h3 class="text-xl">Value: {counter()}</h3>



            <button onClick={() => SetCounter(counter() + 1)} class="bg-blue-500 p-2 mr-2">+1</button>
            <button onClick={() => SetCounter(counter() - 1)} class="bg-blue-500 p-2 mr-2">-1</button>
        </>
    )
}