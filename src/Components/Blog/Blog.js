import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="my-4">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium btn btn-outline btn-error">
            what is cors?
          </div>
          <div className="collapse-content">
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium btn btn-outline btn-error">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content">
            <p>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more. Thats Why I am using firebase
            </p>
            <p>
              <li>
                Parse is an open source alternative that many people use instead
                of Firebase because it offers many of the same features and
                additional benefits. Parse also runs on any cloud, whereas
                Firebase only runs on Google Cloud, limiting your options. Users
                also say that data migrations are much easier with Parse than
                Firebase. Self-hosting is also free as you can download and run
                it on any server. In contrast, Firebase users would have to
                upgrade to the enterprise solution to self-host, which is
                significantly more expensive.
              </li>
              <br />
              <li>
                Supabase is another open source alternative to Firebase, and the
                main difference is that it is a SQL database rather than NoSQL.
                Many users love it because it also offers real-time data,
                authentication for multiple services, file storage, and more.
                Unlike Firebase, which offers unlimited projects and most of its
                features for free, Supabase only allows three free projects.
              </li>
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium btn btn-outline btn-error">
            How does the private route work?
          </div>
          <div className="collapse-content">
            <p>
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application.
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium btn btn-outline btn-error">
            What is Node? How does Node work?
          </div>
          <div className="collapse-content">
            <p>
              Node. js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node. js wastes no time or
              resources on waiting for I/O requests to return.
            </p>
            <p>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
