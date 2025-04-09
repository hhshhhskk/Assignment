export default function Home() {
  return (
    <div className="wrap">
      <div className="box-wrap1">
        {[1, 2, 1, 2, 1].map((num, idx) => (
          <div key={idx} className={`box${num}`}>
            auto-fill
          </div>
        ))}
      </div>

      <div className="box-wrap2">
        {[1, 2, 1, 2, 1].map((num, idx) => (
          <div key={idx} className={`box${num}`}>
            auto-fit
          </div>
        ))}
      </div>
    </div>
  );
}
