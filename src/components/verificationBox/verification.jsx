import './verification.css';

const Verification = () => {
  return (
    <div className="verified container-fluid">
      <h3>
        Let Suppliers{' '}
        <span style={{ color: '#000', borderBottom: '2px solid #EB7150' }}>
          Find You
        </span>
      </h3>
      <button
        style={{
          background: '#EB7150',
          padding: '10px 20px',
          outline: 'none',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Get Verified
      </button>
    </div>
  );
};

export default Verification;
