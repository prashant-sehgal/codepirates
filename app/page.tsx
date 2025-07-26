import HeightBuffer from './components/HeightBuffer';
import Loading from './components/Loading';

export default function Home() {
  return (
    <div className="w-full max-w-200 m-auto flex flex-col justify-between p-1">
      <Loading />
      <HeightBuffer height={5} />
    </div>
  );
}
