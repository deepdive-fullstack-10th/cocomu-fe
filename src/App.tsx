import ToastModal from './components/_common/atoms/Toast';

export default function App() {
  return (
    <div>
      <ToastModal
        type='default'
        message='코코님이 테스트코드를 수정하였습니다'
      />
    </div>
  );
}
