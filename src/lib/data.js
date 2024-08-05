import { Phone, Mail, Home } from 'lucide-svelte'

const aboutUs = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ratione eius sit ducimus magnam, itaque ex dolorum officia, sunt placeat nisi, praesentium perferendis optio fugit et omnis animi nostrum incidunt."

const contactInfo = [
    {
        title: 'Telephone',
        icon: Phone,
        items: ['09178918846', '965-3434']
    },
    {
        title: 'Email',
        icon: Mail,
        items: ['jayrenmarketing@yahoo.com.ph']
    },
    {
        title: 'Address',
        icon: Home,
        items: [
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ducimus laborum doloremque iure quisquam quam autem quia laboriosam commodi explicabo!'
        ]
    }
]

export {
    contactInfo,
    aboutUs
}
