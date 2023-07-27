import { functionA } from './a'

function Demo(): JSX.Element {
    return <div>{functionA() + 10}</div>
}
export default Demo
