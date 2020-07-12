export const timelineData = [
    {
        "list": [
            {
                "title": 'Общая информация',
                "header": true
            },
            {
                "title": "Документ",
                "text": "Профиль требования к должности",
                "header": false
            },
            {
                "title": "Должность",
                "text": "Инженер",
                "header": false
            },
            {
                "title": "Функциональное управление",
                "text": "Логистика",
                "header": false
            },
            {
                "title": "Специализация",
                "text": "Обслуживание и ремонт механического, энергитического и электрооборудования",
                "header": false
            }
        ],
    },

    {
        "list": [
            {
                "title": 'Образование',
                "header": true
            },
            {
                "title": "Степень",
                "text": "Высшее/Среднее высшее",
                "header": false
            },
            {
                "title": "Специализация",
                "text": "Инженерно-техническая",
                "header": false
            }
        ],
    },

    {
        "list": [
            {
                "title": 'Корпоротивные компетенции',
                "header": true
            },
            {
                "title": "Сотрудничество",
                "text": "1",
                "header": false
            },
            {
                "title": "Коммуникации и убеждения",
                "text": "2",
                "header": false
            },
            {
                "title": "Достижение результата",
                "text": "3",
                "header": false
            },
            {
                "title": "Системное мышление",
                "text": "3",
                "header": false
            },
            {
                "title": 'Культура безопасности',
                "text": "2",
                "header": false
            },
            {
                "title": "Сотрудничество",
                "text": "1",
                "header": false
            },
        ],
    },
];

export type ITimelineData = typeof timelineData

const dataApi = {
    fetchData(): Promise<ITimelineData>{
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(timelineData)
            }, 1000)
        })
    }
};

export default dataApi;