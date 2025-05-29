export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">О центре</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              РГП на ПХВ «Национальный центр развития высшего образования» Министерства науки и
              высшего образования Республики Казахстан является ведущей организацией в области
              развития качественного высшего образования.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Наша миссия</h2>
            <p className="text-gray-600 mb-6">
              Содействие развитию качественного высшего образования в Республике Казахстан через
              обеспечение признания квалификаций, аккредитации образовательных программ и интеграции
              в международное образовательное пространство.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Основные направления деятельности
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Признание иностранных документов об образовании</li>
              <li>Аккредитация образовательных программ</li>
              <li>Сопровождение Казахстана в Болонском процессе</li>
              <li>Развитие системы обеспечения качества образования</li>
              <li>Проведение научных исследований в области высшего образования</li>
              <li>Международное сотрудничество в сфере образования</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
