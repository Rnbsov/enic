
export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Реестр образовательных программ</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Официальный реестр аккредитованных образовательных программ высшего и послевузовского
              образования Республики Казахстан.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Назначение реестра</h2>
            <p className="text-gray-600 mb-6">
              Реестр предназначен для обеспечения прозрачности и доступности информации об
              аккредитованных образовательных программах, что способствует повышению качества
              образования и защите прав обучающихся.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Информация в реестре</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Наименование образовательной программы</li>
              <li>Код и группа образовательной программы</li>
              <li>Наименование организации образования</li>
              <li>Срок действия аккредитации</li>
              <li>Дата принятия решения об аккредитации</li>
              <li>Статус аккредитации</li>
            </ul>

            <div className="bg-brand-light-blue-50 border border-brand-light-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-brand-blue-900 mb-2">Поиск в реестре</h3>
              <p className="text-brand-blue-700">
                Для поиска аккредитованных образовательных программ используйте фильтры по названию
                вуза, направлению подготовки или коду специальности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
