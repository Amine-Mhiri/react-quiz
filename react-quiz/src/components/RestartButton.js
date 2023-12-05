function RestartButton({dispatch}) {
    return (
        <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuizz" })}
      >
        Restart
      </button>
    )
}

export default RestartButton
