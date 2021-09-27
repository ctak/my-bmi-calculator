import { calc } from '../utils/BMIUtils';

function Log({bmi}) {
  return (
    <li>
      <div>${calc(bmi.weight, bmi.height)}</div>
      <span>{`Weight: ${bmi.weight} kg`}</span>{' '}
      <span>{`Weight: ${bmi.height} kg`}</span>{' '}
      <span>{`Date: ${bmi.date}`}</span>
    </li>
  )
}

function Logs({logs}) {
  const { loading, data: bmis, error } = logs;

  if (! bmis) return <div>No Data</div>;

  return (
    <div className="Logs">
      <h2>7 Day Data</h2>
      <ul>
        {bmis.map(bmi => (
          <Log bmi={bmi} key={bmi.id} />
        ))}
      </ul>
    </div>
  );
}

export default Logs;
