import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>
          Oops! It looks like the page you're looking for doesn't exist. It
          might have been moved or deleted.
        </p>
        <p>
          Don't worry, you can always go back to the{" "}
          <Link href="/">home page</Link> and start over.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
