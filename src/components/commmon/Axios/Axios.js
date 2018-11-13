import React from "react";
import { Get } from "react-axios";

export default () => {
  return (
    <div className="editAgriment">
      <header>header</header>
      <main>
        <Get url="https://atc-bl.nadzor.online/bl198765/platform/news?offset=0&limit=4">
          {(error, response, isLoading, onReload) => {
            if (error) {
              return (
                <div>
                  Something bad happened: {error.message}{" "}
                  <button
                    onClick={() => onReload({ params: { reload: true } })}
                  >
                    Retry
                  </button>
                </div>
              );
            } else if (isLoading) {
              return <div>Loading...</div>;
            } else if (response !== null) {
              console.log(response);
              return (
                <div>
                  {response.data.message}{" "}
                  <button
                    onClick={() => onReload({ params: { refresh: true } })}
                  >
                    Refresh
                  </button>
                </div>
              );
            }
            return <div>Default message</div>;
          }}
        </Get>
      </main>
    </div>
  );
};
