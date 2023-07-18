import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              semper, justo in convallis sodales.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-600">
              Vestibulum non magna vel risus lacinia dapibus a ac nibh. Nunc
              mattis elit in dui consectetur.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-600">
              Proin maximus lorem sit amet velit pharetra, a cursus neque
              ullamcorper. Duis feugiat odio a neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
