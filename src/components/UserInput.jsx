export default function UserInput({ onChangeInput, userInputData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            placeholder="0"
            value={userInputData.initialInvestment}
            required
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            placeholder="0"
            value={userInputData.annualInvestment}
            required
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            placeholder="0"
            value={userInputData.expectedReturn}
            required
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInputData.duration}
            placeholder="0"
            required
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
