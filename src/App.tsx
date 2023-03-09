import content from "./assets/content";
import Modal from "./components/Modal";

function App() {
  return (
    <Modal
      points={content}
      subtitle="Here is my cool subtitle. This is something that everyone likes"
      title="My Title"
      okText="Let's go"
      laterText="Later"
    />
  );
}

export default App;
