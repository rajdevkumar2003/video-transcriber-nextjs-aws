import DemoSection from "@/components/DemoSection";
import HeaderText from "@/components/HeaderText";
import UploadBtn from "@/components/UploadBtn";


export default function Home() {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      
      <HeaderText h1={"Add epic captions to your videos!"} h2={"Just upload your video and we will do the rest..."}/>
      <UploadBtn text={"Choose file"}/>
      <DemoSection/>
    </main>
  );
}
