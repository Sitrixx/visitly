import axios from "axios";

const useDialogflow = () => {
  const detectIntent = async (query: string) => {
    try {
      const result = await axios.post(
        `https://dialogflow.googleapis.com/v2/projects/${process.env.NEXT_PUBLIC_DIALOGFLOW_PROJECT_ID}/agent/sessions/e7d176d7-91cf-b29f-09b1-761d6b60443d:detectIntent`,
        {
          queryInput: {
            text: {
              text: query,
              languageCode: process.env.NEXT_PUBLIC_DIALOGFLOW_LANGUAGE_CODE,
            },
          },
          queryParams: {
            source: "DIALOGFLOW_CONSOLE",
            timeZone: "Europe/Madrid",
          },
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer`,
          },
        }
      );
      return result.data.queryResult.fulfillmentText;
    } catch (error) {
      console.error(error);
    }
  };

  return { detectIntent };
};

export default useDialogflow;
