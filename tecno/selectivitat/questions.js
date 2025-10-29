const questions = [
    {
        type: "exercicis",
        category: "control_logic",
        text: `Una cadira de rodes elèctrica disposa de dos sistemes per a controlar la marxa endavant. El
        primer sistema és una palanca de control (o <i>joystick</i>). Si es fa servir aquest sistema, la cadira es
        desplaça endavant quan l’usuari mou la palanca en la direcció corresponent. El segon sistema
        permet a l’usuari controlar el moviment de la cadira inclinant el tronc cap endavant. Si es fa
        servir aquest sistema, la cadira avança quan un sensor detecta que l’usuari s’inclina cap endavant.
        La cadira disposa d’un botó que permet seleccionar un d’aquests dos sistemes de control.
        Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:            
        <br>
            <br><img src="Variables.png" alt="Imatge relacionada amb la pregunta">
        <br>
            <br><br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
            <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
            <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
            <br><br>`, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
            <br>
            - Àrea d’escombratge de les pales:
            \\[
            A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\times (77 \\, \\text{m})^2}{4} = 4657{,}7 \\, \\text{m}^2
            \\]
            - Densitat de l’aire:
            \\[
            \\rho = \\frac{1{,}225 \\, \\text{g}}{\\text{m}^3} = 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3}
            \\]
            - Velocitat del vent (en \\(\\text{m/s}\\)):
            \\[
            v = \\frac{25 \\, \\text{km/h}}{3{,}6} = 6{,}94 \\, \\text{m/s}
            \\]
            - Potència del vent:
            \\[
            P_{\\text{vent}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}94 \\, \\text{m/s})^3 = 828{,}08 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
            <br>
            - Aplicant el rendiment de l’aerogenerador:
            \\[
            P_{\\text{útil}} = P_{\\text{vent}} \\times \\eta_{\\text{aerog}} \\times c_a = 828{,}08 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 236{,}62 \\, \\text{kW}
            \\]
            <br>
            <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
            <br>
            - Nombre total d'hores operatives a l'any:
            \\[
            h = 300 \\, \\text{dies/any} \\times 18 \\, \\text{h/dia} = 5400 \\, \\text{h/any}
            \\]
            - Energia generada per un aerogenerador:
            \\[
            E_{\\text{útil}} = P_{\\text{útil}} \\times h = 236{,}62 \\, \\text{kW} \\times 5400 \\, \\text{h} = 1277{,}75 \\, \\text{MWh/any}
            \\]
            - Energia total generada per 50 aerogeneradors:
            \\[
            E_{\\text{total}} = 1277{,}75 \\, \\text{MWh/any} \\times 50 = 63{,}89 \\, \\text{GWh/any}
            \\]
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
            - Ingressos totals:
            \\[
            Ingressos = E_{\\text{total}} \\times p_{\\text{venda}} = 63{,}89 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 4865{,}9 \\, \\text{k€}
            \\]
            <br>
            <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
            <br>
            - Nova velocitat del vent:
            \\[
            v_{nou} = 0{,}9 \\times v = 0{,}9 \\times 6{,}94 \\, \\text{m/s} = 6{,}25 \\, \\text{m/s}
            \\]
            - Nova potència del vent:
            \\[
            P_{\\text{vent, nou}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}25 \\, \\text{m/s})^3 = 654{,}8 \\, \\text{kW}
            \\]
            - Nova potència útil:
            \\[
            P_{\\text{útil, nou}} = 654{,}8 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 187{,}19 \\, \\text{kW}
            \\]
            - Nova energia total:
            \\[
            E_{\\text{total, nou}} = 187{,}19 \\, \\text{kW} \\times 5400 \\, \\text{h} \\times 50 = 50{,}7 \\, \\text{GWh/any}
            \\]
            - Nous ingressos:
            \\[
            Ingressos_{nou} = 50{,}7 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 3865{,}58 \\, \\text{k€}
            \\]
            - Percentatge de disminució:
            \\[
            \\frac{4865{,}9 - 3865{,}58}{4865{,}9} \\times 100 \\approx 20{,}6\\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Volem utilitzar captadors solars de superfície \\(S = 2,1\\,\\text{m<sup>2</sup>}\\) per a produir aigua calenta en un
        habitatge familiar. Els captadors es complementen amb un escalfador elèctric per als dies en
        què no hi ha prou radiació solar. El rendiment energètic d’un captador solar s’obté mitjançant
        l’equació  \\(\eta = \{eta_0} - {k_1} \dfrac{T_m - T_a}{I}\\), en què \\(η_i\\) és el rendiment òptic, \\(k_1\\) 
        és el coeficient de pèrdues, \\(T_m\\) és la temperatura de treball del captador, \\(T_a\\) és la temperatura 
        ambient i \\(I\\) és la radiació solar en \\(text{W/m<sup>2</sup>}\\). Disposem de dos models de captador solar amb les 
        característiques següents:

               <img src="Taula_ex3.png" alt="Imatge relacionada amb la pregunta">

            <br>
            Si les condicions de treball del captador són \\(T_m = 50\\,\\text{ºC}\\), \\(T_a = 18\\,\\text{ºC}\\) i \\(I = 800\\,\\text{W/m^2}\\), determineu:
            <br>
            <br><strong>a)</strong> El rendiment \\(η_a\\) i \\(η_b\\) dels captadors A i B en aquestes condicions de treball. Quina és l’opció més eficient?. [0,5 punts]
            <br><br>
            Escollim el model de captador més eficient de l’apartat anterior i l’utilitzem durant un temps \\(t = 8\\,\\text{h}\\) al dia. Sabent que el consum diari 
            d’aigua és \\(c = 390\\,\\text{L}\\),  que s’escalfa \\(∆T = 35\\,\\text{ºC}\\) i que la calor específica de l’aigua és \\(Ce = 4{,}18\\,\\text{J/(g ºC)}\\) determineu:
            <br>
            <br><strong>b)</strong> El nombre de captadors \\(n) que caldria instaŀlar per a escalfar tota l’aigua consumida mitjançant energia solar. [1 punts]
            <br><strong>c)</strong> L’energia elèctrica consumida \\(E_{\\text{elèct}}\\), en \\(kW h\\) en un dia en el qual la radiació solar
            disminueix a la meitat, tenint en compte que el nombre de captadors és l’obtingut en l’apartat anterior. [1 punts]
            <br><br>`, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Velocitat angular de les rodes i del motor:</strong>
            <br>
            - Velocitat angular de les rodes auxiliars:
            \\[
            \\omega_r = \\frac{v}{r} = \\frac{1,028\\,\\text{m/s}}{0,1\\,\\text{m}} = 10,28\\,\\text{rad/s}
            \\]
            - Velocitat angular del motor:
            \\[
            \\omega_{mot} = \\frac{\\omega_r}{\\tau} = \\frac{10,28\\,\\text{rad/s}}{0,08} = 128,5\\,\\text{rad/s}
            \\]
            <br><strong>b) Potència a l’eix de les rodes:</strong>
            <br>
            - Aplicant rendiment del motor i del reductor:
            \\[
            P_{subm} = P_{cons} \\times \\eta_{mot} \\times \\eta_{red} = 75\\,\\text{W} \\times 0,87 \\times 0,95 = 62,06\\,\\text{W}
            \\]
            <br><strong>c) Parell a l’eix del motor:</strong>
            <br>
            - Potència útil a l’eix del motor:
            \\[
            P_{mot} = P_{cons} \\times \\eta_{mot} = 75\\,\\text{W} \\times 0,87 = 65,25\\,\\text{W}
            \\]
            - Parell:
            \\[
            \\Gamma_{mot} = \\frac{P_{mot}}{\\omega_{mot}} = \\frac{65,25\\,\\text{W}}{128,5\\,\\text{rad/s}} = 0,5077\\,\\text{N·m}
            \\]
            <br><strong>d) Temps màxim de funcionament i distància recorreguda:</strong>
            <br>
            - Energia de la bateria:
            \\[
            E_{bat} = 240\\,\\text{Wh} = 240 \\times 3600\\,\\text{W·s} = 864000\\,\\text{J}
            \\]
            - Temps de funcionament:
            \\[
            t = \\frac{E_{bat}}{P_{cons}} = \\frac{864000\\,\\text{J}}{75\\,\\text{W}} = 11520\\,\\text{s} = 3,2\\,\\text{h}
            \\]
            - Distància màxima recorreguda:
            \\[
            s_{rec} = v \\times t = 1,028\\,\\text{m/s} \\times 11520\\,\\text{s} = 11830\\,\\text{m} = 11,83\\,\\text{km}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Una estufa d’exterior alimentada amb gas butà té un consum regulable d’entre 
            \\(c_{m\\text{ín}} = 450\\,\\text{g/h}\\) i \\(c_{m\\text{àx}} = 800\\,\\text{g/h}\\) de butà. El poder calorífic del butà és \\(p_b = 49,61\\,\\text{MJ/kg}\\) i es distribueix en bombones que contenen una massa de butà de \\(m_b = 12,5\\,\\text{kg}\\). Determineu:
            <br><br>
            <strong>a)</strong> La potència mínima \\(P_{\\text{mín}}\\) i màxima \\(P_{\\text{màx}}\\) de l’estufa. [0,5 punts]
            <br>
            <strong>b)</strong> La durada de funcionament màxima d’una bombona \\(t_{\\text{màx}}\\). [0,5 punts]
            <br>
            <strong>c)</strong> El gràfic de la durada \\(t\\) d’una bombona en hores, en funció del consum \\(c\\) de butà, i indiqueu-ne les escales. [1 punt]
            <br><br>
            Una terrassa de bar té instal·lades \\(n = 3\\) d’aquestes estufes que funcionen durant \\(t_{\\text{bar}} = 10\\,\\text{h/dia}\\) a potència màxima. L’Oficina Catalana del Canvi Climàtic estima un factor d’emissió \\(FE = 2,96\\,\\text{kg CO2/kg butà}\\). Determineu:
            <br>
            <br><strong>d)</strong> La massa de CO2 emesa en un dia de funcionament \\(m_{CO2}\\).
            <br><br>
               <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Velocitat angular de les rodes i del motor:</strong>
            <br>
            - Velocitat angular de les rodes auxiliars:
            \\[
            \\omega_r = \\frac{v}{r} = \\frac{1,028\\,\\text{m/s}}{0,1\\,\\text{m}} = 10,28\\,\\text{rad/s}
            \\]
            - Velocitat angular del motor:
            \\[
            \\omega_{mot} = \\frac{\\omega_r}{\\tau} = \\frac{10,28\\,\\text{rad/s}}{0,08} = 128,5\\,\\text{rad/s}
            \\]
            <br><strong>b) Potència a l’eix de les rodes:</strong>
            <br>
            - Aplicant rendiment del motor i del reductor:
            \\[
            P_{subm} = P_{cons} \\times \\eta_{mot} \\times \\eta_{red} = 75\\,\\text{W} \\times 0,87 \\times 0,95 = 62,06\\,\\text{W}
            \\]
            <br><strong>c) Parell a l’eix del motor:</strong>
            <br>
            - Potència útil a l’eix del motor:
            \\[
            P_{mot} = P_{cons} \\times \\eta_{mot} = 75\\,\\text{W} \\times 0,87 = 65,25\\,\\text{W}
            \\]
            - Parell:
            \\[
            \\Gamma_{mot} = \\frac{P_{mot}}{\\omega_{mot}} = \\frac{65,25\\,\\text{W}}{128,5\\,\\text{rad/s}} = 0,5077\\,\\text{N·m}
            \\]
            <br><strong>d) Temps màxim de funcionament i distància recorreguda:</strong>
            <br>
            - Energia de la bateria:
            \\[
            E_{bat} = 240\\,\\text{Wh} = 240 \\times 3600\\,\\text{W·s} = 864000\\,\\text{J}
            \\]
            - Temps de funcionament:
            \\[
            t = \\frac{E_{bat}}{P_{cons}} = \\frac{864000\\,\\text{J}}{75\\,\\text{W}} = 11520\\,\\text{s} = 3,2\\,\\text{h}
            \\]
            - Distància màxima recorreguda:
            \\[
            s_{rec} = v \\times t = 1,028\\,\\text{m/s} \\times 11520\\,\\text{s} = 11830\\,\\text{m} = 11,83\\,\\text{km}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `La figura mostra la corba tensió-deformació obtinguda en un assaig de tracció. Quin valor aproximat té el mòdul elàstic del material?`,
        options: [
            { text: "250 GPa", value: "a" },
            { text: "110 GPa", value: "b" },
            { text: "265 GPa", value: "c" },
            { text: "62,5 GPa", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>Càlcul del mòdul elàstic:</strong>
            <br><br>
            Tensió aplicada:
            \\[
            \\sigma = 250\\ \\text{MPa}
            \\]
            \\[
            250\\ \\text{MPa} = 250 \\times 10^6\\ \\text{Pa}
            \\]
            <br>
            Deformació:
            \\[
            \\varepsilon = 0,00227
            \\]
            <br>
            Mòdul elàstic:
            \\[
            E = \\frac{\\sigma}{\\varepsilon}
            \\]
            \\[
            E = \\frac{250 \\times 10^6\\ \\text{Pa}}{0,00227}
            \\]
            \\[
            E = 110132158590,30838\\ \\text{Pa}
            \\]
            \\[
            E = 110,13215859030838\\ \\text{GPa}
            \\]
            \\[
            E \\approx 110\\ \\text{GPa}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="https://mcoronil4.github.io/images/2020junyserie1q1.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatics_hydraulics",
        text: `Un cotxe està equipat amb un motor de combustió interna de quatre cilindres en línia de diàmetre \\(\\mathbf{79,5\\,mm}\\) i cursa \\(\\mathbf{80,5\\,mm}\\). Quina és la cilindrada del motor?`,
        options: [
            { text: "399,6 cm³", value: "a" },
            { text: "3 196 cm³", value: "b" },
            { text: "1 598 cm³", value: "c" },
            { text: "8 042 cm³", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <strong>Càlcul del volum total:</strong>
            <br>
            Diàmetre del cilindre: \\(D = 79,5 \\, \\text{mm} = 0,0795 \\, \\text{m}\\)  
            <br>
            Cursa del pistó: \\(C = 80,5 \\, \\text{mm} = 0,0805 \\, \\text{m}\\)
            <br><br>
            Volum d'un cilindre:  
            \\[
            V_{1 \\, cilindre} = \\frac{\\pi}{4} \\times D^2 \\times C
            \\]
            \\[
            V_{1 \\, cilindre} = \\frac{\\pi}{4} \\times (0,0795 \\, \\text{m})^2 \\times (0,0805 \\, \\text{m})
            \\]
            \\[
            V_{1 \\, cilindre} = 0,00040084 \\, \\text{m}^3
            \\]
            <br>
            Volum total per 4 cilindres:  
            \\[
            V_{total} = 4 \\times 0,00040084 \\, \\text{m}^3 = 0,00160336 \\, \\text{m}^3
            \\]
            \\[
            V_{total} \\times 10^6 = 1,603,36 \\, \\text{cm}^3
            \\]
            \\[
            V_{total} \\approx 1,598 \\, \\text{cm}^3
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "motors_reductors",
        text: `Una porta corredissa automàtica és accionada mitjançant un motor que gira a \\(n_{\\text{mot}} = 1\,500\\,\\text{min}^{-1}\\) i un reductor. L’eix de sortida del reductor és un pinyó de radi primitiu \\(r = 30\\,\\text{mm}\\) que acciona una cremallera fixa a la porta. En règim nominal, la porta es trasllada a una velocitat constant \\(v_{\\text{nom}} = 0,12\\,\\text{m/s}\\). Determineu la relació de transmissió entre la velocitat angular de l’eix de sortida del reductor i la velocitat angular de l’eix del motor: \\(\\tau = \\frac{\\omega_{\\text{red}}}{\\omega_{\\text{mot}}}\\).`,
        options: [
            { text: "39,27", value: "a" },
            { text: "0,7639 × 10^{-3}", value: "b" },
            { text: "25,46 × 10^{-3}", value: "c" },
            { text: "infinit", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <strong>Càlcul de la relació de transmissió:</strong><br>
            \\[
            \\tau = \\frac{\\omega_{red}}{\\omega_{mot}}
            \\]<br>
            Motor nominal:<br>
            \\[
            n_{mot} = 1500\\,\\text{min}^{-1}
            \\]<br>
            Velocitat angular motor:<br>
            \\[
            \\omega_{mot} = \\frac{2\\pi \\times n_{mot}}{60\\,\\text{s/min}} = \\frac{2\\pi \\times 1500\\,\\text{min}^{-1}}{60\\,\\text{s/min}} = 157,08\\,\\text{rad/s}
            \\]<br>
            Velocitat de la porta:<br>
            \\[
            v_{nom} = 0,12\\,\\text{m/s}
            \\]<br>
            Radi del pinyó:<br>
            \\[
            r = 30\\,\\text{mm} = 0,03\\,\\text{m}
            \\]<br>
            Velocitat angular reductor:<br>
            \\[
            \\omega_{red} = \\frac{v_{nom}}{r} = \\frac{0,12\\,\\text{m/s}}{0,03\\,\\text{m}} = 4\\,\\text{rad/s}
            \\]<br>
            Relació de transmissió:<br>
            \\[
            \\tau = \\frac{\\omega_{red}}{\\omega_{mot}} = \\frac{4\\,\\text{rad/s}}{157,08\\,\\text{rad/s}} = 0,02546 = 25,46 \\times 10^{-3}
            \\]<br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatics_hydraulics",
        text: `Es vol aixecar una massa \\(m = 1\,200\\,\\text{kg}\\) utilitzant una premsa hidràulica. La secció transversal de l’èmbol gran és \\(A_{gran} = 30\,000\\,\\text{mm}^2\\) i la del petit és \\(A_{petit} = 1\,000\\,\\text{mm}^2\\). Preneu \\(g = 9,807\\,\\text{m/s}^2\\). Determineu la força \\(F\\) que cal exercir sobre l’èmbol petit:`,
        options: [
            { text: "353,1 kN", value: "a" },
            { text: "392,3 N", value: "b" },
            { text: "40 N", value: "c" },
            { text: "36 kN", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>Càlcul de la força sobre l'èmbol petit:</strong><br>
            Pressió hidràulica:<br>
            \\[
            F_1 = F_2 \\cdot \\frac{A_1}{A_2}
            \\]<br>
            Massa a aixecar:<br>
            \\[
            m = 1200\\,\\text{kg}
            \\]<br>
            Gravetat:<br>
            \\[
            g = 9,807\\,\\text{m·s²}
            \\]<br>
            Força sobre l'èmbol gran:<br>
            \\[
            F_2 = m \\cdot g = 1200\\,\\text{kg} \\times 9,807\\,\\text{m·s²} = 11768,4\\,\\text{N}
            \\]<br>
            Àrea de l'èmbol petit:<br>
            \\[
            A_1 = 1000\\,\\text{mm²} = 1000 \\times 10⁻⁶\\,\\text{m²} = 0,001\\,\\text{m²}
            \\]<br>
            Àrea de l'èmbol gran:<br>
            \\[
            A_2 = 30000\\,\\text{mm²} = 30000 \\times 10⁻⁶\\,\\text{m²} = 0,03\\,\\text{m²}
            \\]<br>
            Força sobre l'èmbol petit:<br>
            \\[
            F_1 = F_2 \\cdot \\frac{A_1}{A_2} = 11768,4\\,\\text{N} \\cdot \\frac{0,001\\,\\text{m²}}{0,03\\,\\text{m²}}
            \\]<br>
            \\[
            F_1 = 392,28\\,\\text{N}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials_i_assaigs",
        text: `El Ti-6Al-7Nb és un aliatge biocompatible de titani àmpliament utilitzat en aplicacions quirúrgiques. Conté un \\(\\mathbf{5,5\\%}\\) d’alumini (Al), un \\(\\mathbf{6,5\\%}\\) de niobi (Nb), \\(\\mathbf{0,25\\%}\\) de ferro (Fe), un \\(\\mathbf{0,08\\%}\\) de carboni (C) i la resta és titani (Ti). En l’obtenció d’aquest aliatge, quina quantitat de niobi cal per a aliar-lo amb \\(\\mathbf{250\\,kg}\\) de titani?`,
        options: [
            { text: "18,54 kg", value: "a" },
            { text: "15,68 kg", value: "b" },
            { text: "16,25 kg", value: "c" },
            { text: "21,92 kg", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>Càlcul de la quantitat de niobi:</strong><br>
            Percentatges components:<br>
            \\[
            \\%_{\\mathrm{Ti}} = 100\\% - (5{,}5\\% + 6{,}5\\% + 0{,}25\\% + 0{,}08\\%) = 87{,}67\\%
            \\]<br>
            Massa de titani disponible:<br>
            \\[
            m_{\\mathrm{Ti}} = 250\\,\\text{kg}
            \\]<br>
            Massa total de l'aliatge (convertint el % de Ti a fracció):<br>
            \\[
            m_{\\mathrm{total}} = \\frac{m_{\\mathrm{Ti}}}{0{,}8767}
            = \\frac{250\\,\\text{kg}}{0{,}8767}
            = 285{,}16026006615715\\,\\text{kg}
            \\]<br>
            Percentatge de niobi:<br>
            \\[
            \\%_{\\mathrm{Nb}} = 6{,}5\\% = 0{,}065
            \\]<br>
            Massa de niobi necessària:<br>
            \\[
            m_{\\mathrm{Nb}} = 0{,}065 \\times 285{,}16026006615715\\,\\text{kg}
            = 18{,}535416904300217\\,\\text{kg}
            \\]<br>
            Resultat arrodonit:<br>
            \\[
            m_{\\mathrm{Nb}} \\approx 18{,}54\\,\\text{kg}
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    }
];
