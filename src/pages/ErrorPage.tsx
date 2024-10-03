import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }
  console.log(errorMessage);
  return (
    <>
      <div className="flex gap-x-16 items-center">
        <div className="flex-1">
          <h2 className="text-info-500 font-bold">404</h2>
          <p className="text-4xl font-black mb-4">
            Ooh! It does not taste good, better find another restaurant
          </p>
        </div>
        <DotLottieReact
          src="https://lottie.host/f30ec078-9a35-403d-b0c6-bb7453800381/Jtk8V7yoW4.lottie"
          loop
          autoplay
          className="w-[700px]"
        />
      </div>
    </>
  );
};
