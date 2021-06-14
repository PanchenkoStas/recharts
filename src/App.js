import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  LineChart,
} from 'recharts';

const data = [
  {
    date: '28-Feb',
    monthly: 700,
    weekly: 1200,
    daily: 500,
  },
  {
    date: '7-Mar',
    monthly: 800,
    weekly: 1300,
    daily: 650,
  },
  {
    date: '14-Mar',
    monthly: 850,
    weekly: 1150,
    daily: 500,
  },
  {
    date: '21-Mar',
    monthly: 650,
    weekly: 1200,
    daily: 550,
  },
  {
    date: '28-Mar',
    monthly: 800,
    weekly: 1300,
    daily: 600,
  },
];

function ActiveInfo() {
  return (
    <div className="active-info">
      <h1>Active Community Members</h1>
      <div className="active-info__monthly">
        <span>Monthly</span>
        <div className="active-members">1.2m</div>
      </div>
      <div className="active-info__weekly">
        <span>Weekly</span>
        <div className="active-members">830k</div>
      </div>
      <div className="active-info__daily">
        <span>Daily</span>
        <div className="active-members">485k</div>
      </div>
    </div>
  );
}

export default function App() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="tooltip">
          <h4>Activity</h4>
          <p className="subtitle">+22,5%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <ActiveInfo />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart margin={{ left: 30, top: 20, right: 30 }} data={data}>
          <Line
            dataKey="monthly"
            type="monotone"
            stroke="blue"
            strokeWidth={2}
            activeDot={{ r: 7 }}
          />
          <Line
            dataKey="weekly"
            type="monotone"
            stroke="blueviolet"
            strokeWidth={2}
            activeDot={{ r: 7 }}
          />
          <Line
            dataKey="daily"
            type="monotone"
            stroke="violet"
            strokeWidth={2}
            activeDot={{ r: 7 }}
          />
          <XAxis dataKey="date" tickLine={false} />
          <YAxis datakey="value" tickLine={false} tickCount={6} />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid vertical={true} stroke="#f5f5f5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
