function VoteEvent(valor) {

    function Votar () {
    console.log(valor)
    }
        return (
            <button onClick={Votar} class="voteibtn">Vote This hero!</button>

        )
    
}

export default VoteEvent;