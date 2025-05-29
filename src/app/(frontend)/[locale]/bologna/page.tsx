export default function BolognaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Болонский процесс</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Болонский процесс — это процесс создания единого европейского пространства высшего
              образования, к которому присоединился Казахстан в 2010 году.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Цели Болонского процесса
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Повышение качества высшего образования</li>
              <li>Обеспечение мобильности студентов и преподавателей</li>
              <li>Признание квалификаций</li>
              <li>Трудоустройство выпускников</li>
              <li>Привлекательность европейского высшего образования</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Участие Казахстана</h2>
            <p className="text-gray-600 mb-6">
              Казахстан активно участвует в Болонском процессе, внедряя европейские стандарты
              качества образования и обеспечивая признание казахстанских дипломов в европейских
              странах.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ключевые инструменты</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Система зачетных единиц ECTS</li>
              <li>Трехуровневая система образования (бакалавриат, магистратура, докторантура)</li>
              <li>Приложение к диплому европейского образца</li>
              <li>Внешнее обеспечение качества образования</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
