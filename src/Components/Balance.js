
export function Balance() {
    const balance = 0.00;
    return(
    <div id="balance">
        <h3>YOUR BALANCE</h3>
        <h1>{"$"+balance+".00"}</h1>
    </div>
    )
}