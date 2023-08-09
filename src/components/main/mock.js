const mockTasks = [
    {
         title: 'backlog',
         issues: [
             {
                id: '1',
                name: 'Почистить кэш',
                description: 'Для корректной работы приложения необходимо почистить кэш'
             }
        ]
    },
    {
        title: 'backlog',
        issues: [
            {
                id: '2',
                name: 'Обновить приложение',
                description: 'Старая версия приложения может работать неверно'
            }
       ]
   },
   {
        title: 'ready',
        issues: [
            {
                id: '3',
                name: 'Купить чай',
                description: 'Как можно работать без чая'
            }
    ]
    },
    {
        title: 'inProgress',
        issues: [
            {
                id: '4',
                name: 'Купить печеньки',
                description: "Чтобы резво думать, необходима глюкоза. Глюкоза есть в печеньках"
            }
        ]
    },
    {
        title: 'finished',
        issues: [
            {
                id: '5',
                name: 'Сделать общий созвон',
                description: "А то почему никто не появляется в офисе?"
            }
        ]
    },
 ]