export default function GetStartedSection() {
  return (
    <section className="get-started">
      <div className="get-started-wrapper">
        <h2 className="main-heading">Get started</h2>
        {/* <input type="email" placeholder="Sign up to get started">  */}
        <div className="sign-up-cta">
          <span>Sign up to get started</span>
          <button className="btn primary-btn" type="submit">
            Sign Up
          </button>
        </div>
        <p className="note">
          List your 3D Designing templates with us and{" "}
          <strong>earn a handsome amount </strong> as you possess a skill.
        </p>
      </div>
    </section>
  );
}
