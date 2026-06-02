const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .nf-page { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 3rem 2rem; background: #fff; font-family: 'DM Sans', sans-serif; }
  .nf-big { font-family: 'Playfair Display', serif; font-size: clamp(5rem, 18vw, 9rem); font-weight: 700; color: #e0e0e0; line-height: 1; letter-spacing: -4px; }
  .nf-scene { position: relative; width: 380px; height: 140px; margin: 0.5rem auto; }
  .nf-road { position: absolute; bottom: 0; left: 0; right: 0; height: 22px; background: #2a2a2a; border-radius: 3px; }
  .nf-stripe { position: absolute; bottom: 9px; width: 35px; height: 4px; background: #e8c84a; border-radius: 1px; animation: stripe 0.18s linear infinite; }
  .nf-s1 { left: 20px; animation-delay: 0s; }
  .nf-s2 { left: 90px; animation-delay: 0.06s; }
  .nf-s3 { left: 160px; animation-delay: 0.12s; }
  @keyframes stripe { 0% { transform: translateX(0); } 100% { transform: translateX(-70px); opacity: 0; } }
  .nf-skid-l { position: absolute; bottom: 22px; left: 112px; width: 18px; height: 55px; background: rgba(20,20,20,0.3); border-radius: 3px; transform: skewX(4deg); }
  .nf-skid-r { position: absolute; bottom: 22px; left: 142px; width: 18px; height: 55px; background: rgba(20,20,20,0.3); border-radius: 3px; transform: skewX(4deg); }
  .nf-car { position: absolute; bottom: 18px; left: 80px; width: 200px; height: 70px; transform: rotate(-4deg); }
  .nf-car-roof { position: absolute; bottom: 32px; left: 40px; right: 28px; height: 36px; background: #BB1E00; border-radius: 8px 8px 0 0; }
  .nf-car-window-f { position: absolute; bottom: 36px; left: 52px; width: 52px; height: 26px; background: #7ec8d8; border-radius: 4px 4px 0 0; opacity: 0.85; }
  .nf-car-window-r { position: absolute; bottom: 36px; left: 110px; width: 38px; height: 24px; background: #6ab8cc; border-radius: 4px 4px 0 0; opacity: 0.75; }
  .nf-car-body { position: absolute; bottom: 0; left: 0; right: 0; height: 38px; background: #DD2400; border-radius: 6px 10px 6px 6px; }
  .nf-car-stripe { position: absolute; bottom: 14px; left: 0; right: 0; height: 5px; background: #AA1800; }
  .nf-car-door { position: absolute; bottom: 4px; left: 50px; width: 100px; height: 30px; border-top: 1.5px solid #AA1800; }
  .nf-wheel { position: absolute; bottom: -11px; width: 28px; height: 28px; background: #1a1a1a; border-radius: 50%; border: 3px solid #444; }
  .nf-wheel-f { left: 18px; }
  .nf-wheel-r { right: 18px; animation: wspin 0.12s linear infinite; }
  .nf-hub { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 10px; height: 10px; background: #777; border-radius: 50%; }
  @keyframes wspin { to { transform: rotate(360deg); } }
  .nf-tire-smoke-l { position: absolute; bottom: 20px; left: 116px; width: 14px; height: 14px; border-radius: 50%; background: #aaa; animation: tirepuff 0.25s ease-out infinite; }
  .nf-tire-smoke-r { position: absolute; bottom: 20px; left: 142px; width: 14px; height: 14px; border-radius: 50%; background: #aaa; animation: tirepuff 0.25s ease-out infinite; animation-delay: 0.12s; }
  @keyframes tirepuff { 0% { transform: scale(0.5) translateY(0); opacity: 0.7; } 100% { transform: scale(2.5) translateY(-22px); opacity: 0; } }
  .nf-exhaust { position: absolute; bottom: 22px; right: 10px; }
  .nf-ep { position: absolute; border-radius: 50%; background: #bbb; animation: billow 0.6s ease-out infinite; }
  .nf-e1 { width:20px; height:20px; right:0; bottom:0; animation-delay:0s; }
  .nf-e2 { width:32px; height:32px; right:-8px; bottom:6px; animation-delay:0.1s; }
  .nf-e3 { width:46px; height:46px; right:-20px; bottom:14px; animation-delay:0.2s; }
  .nf-e4 { width:60px; height:60px; right:-34px; bottom:22px; animation-delay:0.3s; }
  .nf-e5 { width:76px; height:76px; right:-52px; bottom:30px; animation-delay:0.4s; }
  @keyframes billow { 0% { transform: scale(0.7) translateX(0) translateY(0); opacity: 0.75; } 100% { transform: scale(1.4) translateX(28px) translateY(-18px); opacity: 0; } }
  .nf-headline { font-family: 'Playfair Display', serif; font-size: clamp(1.4rem, 3.5vw, 2rem); font-weight: 700; font-style: italic; color: #1a1a1a; margin: 1.25rem 0 0.5rem; line-height: 1.15; }
  .nf-sub { font-size: 15px; color: #666; margin-bottom: 1.75rem; line-height: 1.7; max-width: 360px; }
  .nf-btns { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
  .nf-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #1D9E75; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; padding: 13px 28px; border-radius: 100px; text-decoration: none; cursor: pointer; border: none; transition: background 0.2s; }
  .nf-btn-primary:hover { background: #0F6E56; }
  .nf-btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #888; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 400; padding: 10px 24px; border-radius: 100px; border: 0.5px solid #ddd; text-decoration: none; transition: all 0.2s; }
  .nf-btn-secondary:hover { border-color: #aaa; color: #555; }
  .nf-tally-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; align-items: center; justify-content: center; padding: 1rem; }
  .nf-tally-overlay.open { display: flex; }
  .nf-tally-box { background: #fff; border-radius: 16px; width: 100%; max-width: 680px; height: 85vh; overflow: hidden; display: flex; flex-direction: column; }
  .nf-tally-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; border-bottom: 0.5px solid #e5e5e5; flex-shrink: 0; }
  .nf-tally-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1rem; color: #1a1a1a; }
  .nf-tally-close { background: none; border: none; font-size: 22px; cursor: pointer; color: #999; line-height: 1; }
  .nf-tally-frame { flex: 1; border: none; width: 100%; }
`

export default function NotFound() {
  const openModal = () => {
    const el = document.getElementById('nf-tally-overlay')
    if (el) el.classList.add('open')
  }
  const closeModal = () => {
    const el = document.getElementById('nf-tally-overlay')
    if (el) el.classList.remove('open')
  }

  return (
    <>
      <style>{styles}</style>
      <div className="nf-page">
        <div className="nf-big">404</div>

        <div className="nf-scene">
          <div className="nf-skid-l" />
          <div className="nf-skid-r" />
          <div className="nf-tire-smoke-l" />
          <div className="nf-tire-smoke-r" />
          <div className="nf-car">
            <div className="nf-car-roof" />
            <div className="nf-car-window-f" />
            <div className="nf-car-window-r" />
            <div className="nf-car-body">
              <div className="nf-car-stripe" />
              <div className="nf-car-door" />
            </div>
            <div className="nf-wheel nf-wheel-f"><div className="nf-hub" /></div>
            <div className="nf-wheel nf-wheel-r"><div className="nf-hub" /></div>
            <div className="nf-exhaust">
              <div className="nf-ep nf-e1" />
              <div className="nf-ep nf-e2" />
              <div className="nf-ep nf-e3" />
              <div className="nf-ep nf-e4" />
              <div className="nf-ep nf-e5" />
            </div>
          </div>
          <div className="nf-road">
            <div className="nf-stripe nf-s1" />
            <div className="nf-stripe nf-s2" />
            <div className="nf-stripe nf-s3" />
          </div>
        </div>

        <h1 className="nf-headline">HELL YEAH BROTHER,<br />YOU'RE LOST.</h1>
        <p className="nf-sub">This page doesn't exist — but your perfect car does.</p>

        <div className="nf-btns">
          <a className="nf-btn-primary" href="/#pricing">
            🚗 Let's go find it
          </a>
          <a
            className="nf-btn-secondary"
            href="https://www.youtube.com/watch?v=QxIWDmmqZzY"
            target="_blank"
            rel="noreferrer"
          >
            🎸 Don't tell me how to freedom
          </a>
        </div>
      </div>

      <div id="nf-tally-overlay" className="nf-tally-overlay" onClick={(e) => { if ((e.target as HTMLElement).id === 'nf-tally-overlay') closeModal() }}>
        <div className="nf-tally-box">
          <div className="nf-tally-header">
            <span className="nf-tally-title">Find A Car Guy</span>
            <button className="nf-tally-close" onClick={closeModal}>×</button>
          </div>
          <iframe
            className="nf-tally-frame"
            src="https://tally.so/embed/9qM02Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            title="Find A Car Guy intake form"
          />
        </div>
      </div>
    </>
  )
}
