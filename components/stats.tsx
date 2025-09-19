export function Stats() {
  const stats = [
    { number: "500+", label: "Tech Professionals" },
    { number: "10K+", label: "Skills Verified" },
    { number: "95%", label: "Success Rate" },
    { number: "24h", label: "Average Response" },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
