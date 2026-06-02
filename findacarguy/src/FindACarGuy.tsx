import { useState } from "react"
import heroCar from "./assets/hero-car.jpg"
import car2 from "./assets/car2.jpg"
import car3 from "./assets/car3.jpg"

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .facg-root {
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  .facg-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 2.5rem;
    border-bottom: 0.5px solid #e5e5e5;
    position: sticky;
    top: 0;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(8px);
    z-index: 100;
  }
  .facg-nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a1a1a;
    text-decoration: none;
  }
  .facg-nav-cta {
    background: #1D9E75;
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 9px 22px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .facg-nav-cta:hover { background: #0F6E56; }

  /* HERO */
  .facg-hero {
    padding: 6rem 2.5rem 5rem;
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
  }
  .facg-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 1.5rem;
  }
  .facg-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.12;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
  }
  .facg-hero h1 em {
    font-style: italic;
    color: #1D9E75;
  }
  .facg-hero-body {
    font-size: 18px;
    color: #555;
    line-height: 1.75;
    max-width: 520px;
    margin: 0 auto 2.5rem;
  }
  .facg-btn-primary {
    display: inline-block;
    background: #1D9E75;
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 15px 36px;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
  }
  .facg-btn-primary:hover { background: #0F6E56; }
  .facg-hero-sub {
    font-size: 13px;
    color: #aaa;
    margin-top: 1rem;
  }

  /* SECTION SHARED */
  .facg-section {
    padding: 5rem 2.5rem;
    border-top: 0.5px solid #e5e5e5;
  }
  .facg-section-inner {
    max-width: 900px;
    margin: 0 auto;
  }
  .facg-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #aaa;
    margin-bottom: 1.25rem;
  }
  .facg-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  /* HOW IT WORKS */
  .facg-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }
  .facg-step {
    padding: 1.5rem;
    background: #f9f9f7;
    border-radius: 12px;
    border: 0.5px solid #e8e8e8;
  }
  .facg-step-num {
    font-family: 'Playfair Display', serif;
    font-size: 2.25rem;
    font-weight: 700;
    color: #1D9E75;
    margin-bottom: 0.75rem;
    line-height: 1;
  }
  .facg-step h3 {
    font-size: 15px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }
  .facg-step p {
    font-size: 14px;
    color: #777;
    line-height: 1.65;
  }

  /* PITCH */
  .facg-pitch {
    background: #f9f9f7;
  }
  .facg-pitch-body {
    font-size: 16px;
    color: #555;
    line-height: 1.8;
    max-width: 560px;
    margin-bottom: 2.5rem;
  }
  .facg-perks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }
  .facg-perk {
    background: #fff;
    border: 0.5px solid #e5e5e5;
    border-radius: 10px;
    padding: 1.25rem 1rem;
  }
  .facg-perk-icon {
    font-size: 22px;
    margin-bottom: 0.6rem;
  }
  .facg-perk span {
    font-size: 13px;
    font-weight: 500;
    color: #1a1a1a;
    display: block;
  }
  .facg-perk small {
    font-size: 12px;
    color: #999;
    line-height: 1.5;
    display: block;
    margin-top: 3px;
  }

  /* PRICING */
  .facg-pricing-wrap {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
  }
  .facg-price-card {
    background: #fff;
    border: 0.5px solid #e5e5e5;
    border-radius: 16px;
    padding: 2.5rem 3rem;
    max-width: 420px;
    width: 100%;
    text-align: center;
  }
  .facg-price-amount {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .facg-price-amount sup {
    font-size: 1.75rem;
    vertical-align: top;
    margin-top: 0.6rem;
  }
  .facg-price-desc {
    font-size: 14px;
    color: #999;
    margin-bottom: 2rem;
  }
  .facg-price-list {
    list-style: none;
    text-align: left;
    margin-bottom: 2rem;
  }
  .facg-price-list li {
    font-size: 14px;
    color: #555;
    padding: 7px 0;
    border-bottom: 0.5px solid #f0f0f0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .facg-price-list li::before {
    content: "✓";
    color: #1D9E75;
    font-weight: 500;
    flex-shrink: 0;
  }

  /* ABOUT */
  .facg-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
  @media (max-width: 640px) {
    .facg-about-grid { grid-template-columns: 1fr; gap: 2rem; }
  }
  .facg-charlie-tag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #f4f4f2;
    border: 0.5px solid #e5e5e5;
    border-radius: 100px;
    padding: 6px 16px 6px 6px;
    margin-bottom: 1.5rem;
  }
  .facg-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #1D9E75;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
  }
  .facg-charlie-tag span {
    font-size: 13px;
    font-weight: 500;
    color: #1a1a1a;
  }
  .facg-about-text p {
    font-size: 15px;
    color: #555;
    line-height: 1.85;
    margin-bottom: 1.1rem;
  }
  .facg-about-text p:last-child { margin-bottom: 0; }
  .facg-about-sig {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 15px;
    color: #aaa;
  }
  .facg-photo-main {
    border-radius: 12px;
    overflow: hidden;
    background: #f4f4f2;
    border: 0.5px solid #e5e5e5;
    aspect-ratio: 16/10;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  .facg-photo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .facg-photo-sm {
    border-radius: 10px;
    background: #f4f4f2;
    border: 0.5px solid #e5e5e5;
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .facg-photo-label {
    font-size: 12px;
    color: #bbb;
    text-align: center;
  }

  /* FORM */
  .facg-form-section {
    background: #f9f9f7;
  }
  .facg-form-intro {
    font-size: 16px;
    color: #666;
    line-height: 1.75;
    max-width: 520px;
    margin-bottom: 2.5rem;
  }
  .facg-form {
    max-width: 600px;
  }
  .facg-field {
    margin-bottom: 1.75rem;
  }
  .facg-label-text {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 6px;
  }
  .facg-hint {
    font-weight: 400;
    color: #bbb;
    font-size: 13px;
    margin-left: 6px;
  }
  .facg-textarea {
    width: 100%;
    min-height: 90px;
    resize: vertical;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    padding: 12px 14px;
    border-radius: 10px;
    border: 0.5px solid #ddd;
    background: #fff;
    color: #1a1a1a;
    outline: none;
    transition: border-color 0.15s;
  }
  .facg-textarea:focus { border-color: #1D9E75; }
  .facg-input {
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    padding: 11px 14px;
    border-radius: 10px;
    border: 0.5px solid #ddd;
    background: #fff;
    color: #1a1a1a;
    outline: none;
    transition: border-color 0.15s;
  }
  .facg-input:focus { border-color: #1D9E75; }
  .facg-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .facg-chip {
    padding: 8px 16px;
    border-radius: 100px;
    border: 0.5px solid #ddd;
    background: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: #666;
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;
  }
  .facg-chip:hover { border-color: #aaa; }
  .facg-chip.active {
    background: #E1F5EE;
    border-color: #5DCAA5;
    color: #0F6E56;
    font-weight: 500;
  }
  .facg-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (max-width: 480px) {
    .facg-row { grid-template-columns: 1fr; }
  }
  .facg-divider {
    height: 0.5px;
    background: #e5e5e5;
    margin: 2rem 0;
  }
  .facg-submit {
    width: 100%;
    padding: 16px;
    background: #1D9E75;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: background 0.2s;
    margin-top: 0.5rem;
  }
  .facg-submit:hover { background: #0F6E56; }
  .facg-submit-sub {
    font-size: 12px;
    color: #bbb;
    text-align: center;
    margin-top: 0.75rem;
  }

  /* FOOTER */
  .facg-footer {
    padding: 2rem 2.5rem;
    border-top: 0.5px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .facg-footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: #1a1a1a;
  }
  .facg-footer-note {
    font-size: 12px;
    color: #bbb;
    max-width: 420px;
    line-height: 1.6;
  }
`

type ChipGroupProps = {
  options: string[]
  multi?: boolean
}

function ChipGroup({ options, multi = true }: ChipGroupProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (opt: string) => {
    if (multi) {
      setSelected(prev =>
        prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
      )
    } else {
      setSelected(prev => (prev.includes(opt) ? [] : [opt]))
    }
  }

  return (
    <div className="facg-chips">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          className={`facg-chip${selected.includes(opt) ? " active" : ""}`}
          onClick={() => toggle(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export default function FindACarGuy() {
  const scrollToForm = () => {
    document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <style>{styles}</style>
      <div className="facg-root">

        {/* NAV */}
        <nav className="facg-nav">
          <a href="#" className="facg-nav-logo">FindACarGuy</a>
          <button className="facg-nav-cta" onClick={scrollToForm}>Get started — $300</button>
        </nav>

        {/* HERO */}
        <section className="facg-hero">
          <p className="facg-eyebrow">Nationwide car finding service</p>
          <h1>Stop dreading the dealership.<br /><em>Let me find your car.</em></h1>
          <p className="facg-hero-body">
            Tell me what you want. I'll find you five real, vetted options — the right car, at the right price, without the runaround.
          </p>
          <button className="facg-btn-primary" onClick={scrollToForm}>Get started — $300</button>
          <p className="facg-hero-sub">Flat fee. One free revision round. No upsells. No pressure.</p>
        </section>

        {/* HOW IT WORKS */}
        <section className="facg-section">
          <div className="facg-section-inner">
            <p className="facg-label">How it works</p>
            <h2>Four steps to the right car.</h2>
            <div className="facg-steps">
              {[
                { n: "01", title: "Tell me what you need", body: "Budget, must-haves, deal-breakers. A quick form — takes 5 minutes." },
                { n: "02", title: "I do the hunting", body: "I search nationwide — listings, dealers, private sellers — so you don't have to." },
                { n: "03", title: "You get 5 real options", body: "Vetted picks with pricing context and my honest take on each one." },
                { n: "04", title: "You choose, I support", body: "Not feeling any of them? I'll do one more full round on me." },
              ].map(s => (
                <div className="facg-step" key={s.n}>
                  <div className="facg-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PITCH */}
        <section className="facg-section facg-pitch">
          <div className="facg-section-inner">
            <p className="facg-label">Why it works</p>
            <h2>I know how this game is played.</h2>
            <p className="facg-pitch-body">
              I've helped dozens of people cut through the noise, avoid bad deals, and find cars they actually love — fast. You shouldn't need to become an expert just to buy a car.
            </p>
            <div className="facg-perks">
              {[
                { icon: "🗺️", label: "Nationwide search", sub: "Every major listing source" },
                { icon: "💰", label: "Fair price intel", sub: "Know what you should pay" },
                { icon: "⚡", label: "48hr turnaround", sub: "Fast, thorough, no fluff" },
                { icon: "🤝", label: "No BS advice", sub: "I'm on your side, period" },
              ].map(p => (
                <div className="facg-perk" key={p.label}>
                  <div className="facg-perk-icon">{p.icon}</div>
                  <span>{p.label}</span>
                  <small>{p.sub}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="facg-section">
          <div className="facg-section-inner" style={{ textAlign: "center" }}>
            <p className="facg-label">Pricing</p>
            <h2>One flat fee. No surprises.</h2>
            <div className="facg-pricing-wrap">
              <div className="facg-price-card">
                <div className="facg-price-amount"><sup>$</sup>300</div>
                <p className="facg-price-desc">Up to 10 hand-picked options across two rounds if needed.</p>
                <ul className="facg-price-list">
                  {[
                    "5 hand-picked car options",
                    "Full details on each match",
                    "Market pricing breakdown",
                    "My honest recommendation",
                    "One free revision round",
                    "Follow-up Q&A included",
                  ].map(item => <li key={item}>{item}</li>)}
                </ul>
                <button className="facg-btn-primary" style={{ width: "100%" }} onClick={scrollToForm}>
                  Get started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="facg-section facg-pitch">
          <div className="facg-section-inner">
            <p className="facg-label">About</p>
            <div className="facg-about-grid">
              <div className="facg-about-text">
                <div className="facg-charlie-tag">
                  <div className="facg-avatar">C</div>
                  <span>Charlie — Find A Car Guy</span>
                </div>
                <h2>I've been obsessed with cars my whole life.</h2>
                <p>
                  Growing up, I knew every make, model, and trim on the road. I've bought and sold more cars than I can count — and somewhere along the way, people started asking me for help.
                </p>
                <p>
                  A friend in Philadelphia wanted to replace his aging S10. Found him a Chevy Colorado. Another friend was about to buy a used Hyundai, didn't know the legendary 10-year/100,000-mile warranty doesn't transfer to second owners. Saved him from a decision he'd have regretted the moment something went wrong. He bought a Ridgeline instead.
                </p>
                <p>
                  A former colleague was set on a new Ford Escape until I mentioned the transmission problems. She bought something else. My ex needed a reliable car on a tight budget — I found her a mint vintage Toyota. She loved it. She also eventually blew the engine, but that part wasn't my fault.
                </p>
                <p>
                  Every time, the pattern was the same: I knew something they didn't, and it saved them money, stress, or both. FindACarGuy is just me doing that full time — for anyone who doesn't want to go it alone.
                </p>
                <p className="facg-about-sig">— Charlie</p>
              </div>
              <div>
                <div className="facg-photo-main">
                  <img src={heroCar} alt="Charlie's 2000 Subaru Impreza 2.5 RS — STi swapped" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                </div>
                <p style={{fontSize:"12px",color:"#aaa",marginTop:"6px",marginBottom:"8px",fontStyle:"italic"}}>
                  2000 Subaru Impreza 2.5 RS — STi swapped. Totaled by a drowsy driver. Finding its replacement is what made me realize I was pretty good at this.
                </p>
                <div className="facg-photo-grid">
                  <div>
                    <div className="facg-photo-sm">
                      <img src={car2} alt="My wife's car — the day we bought it" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                    </div>
                    <p style={{fontSize:"11px",color:"#aaa",marginTop:"4px",fontStyle:"italic"}}>She's not only a wife, she's a member. Helped her trade out of a 2007 RAV4.</p>
                  </div>
                  <div>
                    <div className="facg-photo-sm">
                      <img src={car3} alt="My Shelby GT350 — red, no stripe, comfy seats" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                    </div>
                    <p style={{fontSize:"11px",color:"#aaa",marginTop:"4px",fontStyle:"italic"}}>My GT350. Wanted one forever. Red, no stripe, comfy seats. Found it myself.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="facg-section facg-form-section" id="get-started">
          <div className="facg-section-inner">
            <p className="facg-label">Get started</p>
            <h2>Let's find your car.</h2>
            <p className="facg-form-intro">
              No specs required. Just tell me about you and what you're looking for — I'll handle the rest.
            </p>
            <form className="facg-form" onSubmit={e => e.preventDefault()}>

              <div className="facg-field">
                <label className="facg-label-text">
                  What's the best car you've ever owned — and what made it great?
                  <span className="facg-hint">or "I've never found one I loved"</span>
                </label>
                <textarea
                  className="facg-textarea"
                  placeholder="e.g. My 2004 Tacoma. Never broke down, went anywhere, fit my whole life in the bed..."
                />
              </div>

              <div className="facg-field">
                <label className="facg-label-text">What will you mostly use this car for?</label>
                <ChipGroup options={["Daily commute", "Family hauler", "Weekend fun", "Off-road / outdoors", "Work / hauling", "Road trips", "All of the above"]} />
              </div>

              <div className="facg-field">
                <label className="facg-label-text">New or pre-owned?</label>
                <ChipGroup multi={false} options={["New", "Pre-owned", "Either — show me the best value"]} />
              </div>

              <div className="facg-field">
                <label className="facg-label-text">
                  Budget range
                  <span className="facg-hint">ballpark is fine</span>
                </label>
                <ChipGroup multi={false} options={["Under $10k", "Under $15k", "$15k–$25k", "$25k–$40k", "$40k–$60k", "$60k+"]} />
              </div>

              <div className="facg-field">
                <label className="facg-label-text">
                  Preferred mileage range
                  <span className="facg-hint">optional</span>
                </label>
                <ChipGroup multi={false} options={["Under 20k", "Under 50k", "Under 75k", "Under 100k", "Any mileage"]} />
              </div>

              <div className="facg-field">
                <label className="facg-label-text">
                  Any hard nos or must-haves?
                  <span className="facg-hint">optional</span>
                </label>
                <textarea
                  className="facg-textarea"
                  style={{ minHeight: 70 }}
                  placeholder="e.g. Must fit a car seat. No white cars. Needs good cargo space. Good in snow."
                />
              </div>

              <div className="facg-divider" />

              <div className="facg-row">
                <div className="facg-field" style={{ marginBottom: 0 }}>
                  <label className="facg-label-text">Your name</label>
                  <input type="text" className="facg-input" placeholder="First name is fine" />
                </div>
                <div className="facg-field" style={{ marginBottom: 0 }}>
                  <label className="facg-label-text">Email</label>
                  <input type="email" className="facg-input" placeholder="you@example.com" />
                </div>
              </div>

              <div className="facg-field" style={{ marginTop: "1.5rem" }}>
                <label className="facg-label-text">How soon are you looking?</label>
                <ChipGroup multi={false} options={["ASAP", "1–3 months", "3–6 months", "Just researching"]} />
              </div>

              <button type="submit" className="facg-submit">
                Send it — $300 flat fee
              </button>
              <p className="facg-submit-sub">
                You'll get 5 vetted car options within 48 hours. No upsells. No pressure.
              </p>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="facg-footer">
          <span className="facg-footer-logo">FindACarGuy</span>
          <p className="facg-footer-note">
            FindACarGuy is an independent car research and consulting service. We do not sell vehicles, handle transactions, or represent any dealer or seller.
          </p>
        </footer>

      </div>
    </>
  )
}
