"use client";

import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor from "@/components/TranscriptionEditor";
//import TranscriptionItem from "@/components/TranscriptionItem";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionHelpers";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FilePage({ params }) {
  const fileName = params.filename;

  const [isTranscribing, setIsTranscribing] = useState(false);
  const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);
  const [isFetchingInfo, setIsFetchingInfo] = useState(false);

  useEffect(() => {
    getTranscription();
  }, [fileName]);

  function getTranscription() {
    setIsFetchingInfo(true);
    axios.get("/api/transcribe?filename=" + fileName).then((response) => {
      setIsFetchingInfo(false);
      const status = response.data?.status;
      const transcription = response.data?.transcription;

      if (status == "IN_PROGRESS") {
        setIsTranscribing(true);
        setTimeout(getTranscription, 3000);
      } else {
        setIsTranscribing(false);

        setAwsTranscriptionItems(
          clearTranscriptionItems(transcription.results.items)
        );
      }
    });
    //7iwlpoarcjp.mp4
  }

  if (isTranscribing) {
    return <div>Transcribing your video...</div>;
  }

  if (isFetchingInfo) {
    return <div>Fetching information...</div>;
  }

  return (
    <div>
    <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 items-center">
      <div className="">
        <h2 className="text-2xl mb-4 text-white/60">Transcription</h2>
        <TranscriptionEditor
          awsTranscriptionItems={awsTranscriptionItems}
          setAwsTranscriptionItems={setAwsTranscriptionItems} />
      </div>
      <div className="flex flex-col items-center mt-0">
        <h2 className="text-2xl mb-4 text-white/60">Result</h2>
        <ResultVideo
          filename={fileName}
          transcriptionItems={awsTranscriptionItems} />
          
      </div>
    </div>
  </div>
  );
}
