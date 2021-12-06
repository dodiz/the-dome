import humanImage from "../media/races/humans.jpg"
import mutantImage from "../media/races/mutants.jpg"
import robotImage from "../media/races/robots.jpg"

export const stats = [
    {
        _id: "strength",
        label: "Forza"
    },
    {
        _id: "agility",
        label: "Destrezza"
    },
    {
        _id: "endurance",
        label: "Costituzione"
    },
    {
        _id: "mind",
        label: "Mente"
    },
    {
        _id: "charisma",
        label: "Carisma"
    },
    {
        _id: "handcraft",
        label: "Manualità"
    }
]
export const skillsCategories = [
    {
        _id: "skill_combattive",
        label: "Skill combattive"
    },
    {
        _id: "skill_fisiche",
        label: "Skill fisiche"
    },
    {
        _id: "skill_culturali",
        label: "Skill culturali"
    },
    {
        _id: "skill_sociali",
        label: "Skill Sociali"
    },
    {
        _id: "skill_tecniche",
        label: "Skill Tecniche"
    },
    {
        _id: "skill_pratiche",
        label: "Skill pratiche"
    }
]
export const powersCategories = [
    {
        _id: "mutant",
        label: "Mutante",
    },
    {
        _id: "robot",
        label: "Sintentico",
    }
]
export const effectsCategories = [
    {
        _id: "desease",
        label: "Malattie"
    },
    {
        _id: "from_objects",
        label: "Alterazioni da oggetti"
    },
    {
        _id: "from_powers",
        label: "Alterazioni da poteri"
    }
]
export const bonuses = [
    {
        _id: "vantaggio1",
        label: "Vantaggio 1",
        description:
            "eiowpiepo qw iepoqw ioepiqw oepiqw eopi qwpoei qwopei qwpo eiqw po "
    },
    {
        _id: "vantaggio2",
        label: "Vantaggio due",
        description:
            "eiowpiepo qw iepoqw ioepiqw oepiqw eopi qwpoei qwopei qwpo eiqw po "
    },
    {
        _id: "vantaggio3",
        label: "Vantaggio tre",
        description:
            "eiowpiepo qw iepoqw ioepiqw oepiqw eopi qwpoei qwopei qwpo eiqw po "
    }
]
export const maluses = [
    {
        _id: "svantaggio1",
        label: "svantaggio uno",
        description:
            "eiowpiepo qw iepoqw ioepiqw oepiqw eopi qwpoei qwopei qwpo eiqw po "
    },
    {
        _id: "svantaggio2",
        label: "svantaggio due",
        description:
            "eiowpiepo qw iepoqw ioepiqw oepiqw eopi qwpoei qwopei qwpo eiqw po "
    },
    {
        _id: "svantaggio3",
        label: "svantaggio tre",
        description:
            "eiowpiepo qw iepoqw ioepiqw oepiqw eopi qwpoei qwopei qwpo eiqw po "
    }
]
export const shopCategories = [
    {
        _id: "categoria_1",
        label: "categoria 1"
    },
    {
        _id: "kit",
        label: "Kit"
    },
    {
        _id: "categoria_3",
        label: "categoria 3"
    },
    {
        _id: "categoria_4",
        label: "categoria 4"
    }
]
export const markets = [
    {
        _id: "mera",
        label: "Mercato di mera",
        factions: ["mera"]
    },
    {
        _id: "deserto",
        label: "Mercato della nave",
        factions: ["deserto"]
    },
    {
        _id: "bazar",
        label: "Mercato del bazar",
        factions: ["mera", "deserto"]
    }
]
export const races = [
    {
        _id: "human",
        label: "Umano",
        img: humanImage,
        description: (
            <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere
                dicta. Mollitia voluptatibus culpa voluptatum pariatur distinctio
                reprehenderit tempora expedita!
            </>
        )
    },
    {
        _id: "mutant",
        label: "Mutante",
        img: mutantImage,
        description: (
            <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere
                dicta. Mollitia voluptatibus culpa voluptatum pariatur distinctio
                reprehenderit tempora expedita!
            </>
        )
    },
    {
        _id: "robot",
        label: "Sintentico",
        img: robotImage,
        description: (
            <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facere
                dicta. Mollitia voluptatibus culpa voluptatum pariatur distinctio
                reprehenderit tempora expedita!
            </>
        )
    }
]
export const factions = [
    {
        _id: "mera",
        label: "Mera",
        img: humanImage,
        description: (
            <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat
                tenetur blanditiis corrupti expedita mollitia dolor iste delectus
                voluptates possimus?
            </>
        )
    },
    {
        _id: "deserto",
        label: "Deserto",
        img: mutantImage,
        description: (
            <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat
                tenetur blanditiis corrupti expedita mollitia dolor iste delectus
                voluptates possimus?
            </>
        )
    }
]
