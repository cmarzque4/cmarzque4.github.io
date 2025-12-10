const questions = [
    {
        type: "exercicis",
        category: "control_logic",
        text: `<br>Una cadira de rodes elèctrica disposa de dos sistemes per a controlar la marxa endavant. El
        primer sistema és una palanca de control (o <i>joystick</i>). Si es fa servir aquest sistema, la cadira es
        desplaça endavant quan l’usuari mou la palanca en la direcció corresponent. El segon sistema
        permet a l’usuari controlar el moviment de la cadira inclinant el tronc cap endavant. Si es fa
        servir aquest sistema, la cadira avança quan un sensor detecta que l’usuari s’inclina cap endavant.
        La cadira disposa d’un botó que permet seleccionar un d’aquests dos sistemes de control.
        Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:            
        <br>
            <br><img src="Variables.png" alt="Variables d'estat">
        <br>
            <br><br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
            <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
            <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
            <br><br>`, 
        correctAnswer: "",  
        steps: `
            <strong>a)Taula de la veritat del sistema</strong>
            <br>
        <table>
            <tr>
                <th>b</th>
                <th>j</th>
                <th>i</th>
                <th>a</th>
            </tr>

            <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </table>
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
        text: `<br>Volem utilitzar captadors solars de superfície \\(S = 2{,}1\\,\\text{m^2}\\) per a produir aigua calenta en un
        habitatge familiar. Els captadors es complementen amb un escalfador elèctric per als dies en
        què no hi ha prou radiació solar. El rendiment energètic d’un captador solar s’obté mitjançant
        l’equació  \\(η = η_0\\) - \\(k_1\\) \\(dfrac{{T_m - T_a}}{I}\\), en què \\(η_0\\) és el rendiment òptic, \\(k_1\\) 
        és el coeficient de pèrdues, \\(T_m\\) és la temperatura de treball del captador, \\(T_a\\) és la temperatura 
        ambient i \\(I\\) és la radiació solar en \\(W/m^2\\). Disposem de dos models de captador solar amb les 
        característiques següents:

               <img src="Taula_ex3.png" alt="Taula \\(η_0\\) i \\(k_1\\) segons Captador A i B">

            <br>
            Si les condicions de treball del captador són \\(T_m = 50\\,\\text{ºC}\\), \\(T_a = 18\\,\\text{ºC}\\) i \\(I = 800\\,\\text{m^2}\\), determineu:
            <br>
            <br><strong>a)</strong> El rendiment \\(η_a\\) i \\(η_b\\) dels captadors A i B en aquestes condicions de treball. Quina és l’opció més eficient?. [0,5 punts]
            <br><br>
            Escollim el model de captador més eficient de l’apartat anterior i l’utilitzem durant un temps \\(t = 8\\,\\text{h}\\) al dia. Sabent que el consum diari 
            d’aigua és \\(c = 390\\,\\text{L}\\),  que s’escalfa \\(∆T = 35\\,\\text{ºC}\\) i que la calor específica de l’aigua és \\(Ce = 4{,}18\\,\\text{J/(g ºC)}\\) determineu:
            <br>
            <br><strong>b)</strong> El nombre de captadors \\(n\\) que caldria instaŀlar per a escalfar tota l’aigua consumida mitjançant energia solar. [1 punt]
            <br><strong>c)</strong> L’energia elèctrica consumida \\(E_{\\text{elèct}}\\), en \\(kW h\\) en un dia en el qual la radiació solar
            disminueix a la meitat, tenint en compte que el nombre de captadors és l’obtingut en l’apartat anterior. [1 punt]
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
        text: `<br>Una motorista puja un pendent a una velocitat constant \\(v = 50\\,\\text{km/h}\\) sense fer lliscar la
        roda del darrere. La marxa que té posada fa que la relació de transmissió entre l’eix de sortida del motor i l’eix de la roda del darrere sigui \\(τ = ω_{roda}/ω_{motor} = 0{,}044\\). Aquesta reducció de
        velocitat s’aconsegueix mitjançant una transmissió d’engranatges de rendiment \\(η_{eng} = 0{,}90\\) i
        una transmissió per cadena de rendiment \\(η_{cad} = 0,85\\). La roda té un diàmetre \\(d = 620\\,\\text{mm}\\) i la
        massa total de la motorista més la moto és \\(m = 150\\,\\text{kg}\\). Si el parell a l’eix de sortida del motor
        és \\(Γ_{motor} = 6\\,\\text{N m}\\) i la fricció amb l’aire es considera negligible, determineu: 
        <img src="ex.moto.png" alt="Imatge moto">
            <br><br>
            <strong>a)</strong> Les velocitats de gir de la roda \\(ω_{roda}\\) i de l’eix del motor \\(ω_{motor}\\), en rad/s. [0,5 punts]
            <br>
            <strong>b)</strong> La potència \\(P_{motor}\\) a l’eix de sortida del motor. [0,5 punts]
            <br>
            <strong>c)</strong> La potència mecànica \\(P_{roda}\\) a l’eix de la roda i l’angle α que forma el perfil de la carretera amb l’horitzontal. <nbsp> [1 punt]
            <br>
            <br><strong>d)</strong> El parell \\(Γ_{roda}\\) a l’eix de la roda. [0,5 punts]
            <br><br>`,
        correctAnswer: "",  
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
        text: `
        <img src="ex.corrent.png" alt="Imatge cirquit">
        <br>Els dos llums d’encreuament d’un vehicle es connecten en paraŀlel a una bateria de tensió
        \\(U = 12\\,\\text{V}\\). La bateria i els llums es connecten mitjançant un cable bipolar de coure de diàmetre
        \\(d = 2{,}5\\,\\text{mm}\\). El coure té una resistivitat \\(ρ = 1{,}7 x 10^{–8}\\,\\text{Ω m}\\). La resistència \\(R_{cable}\\) de l’esquema de
        la figura correspon als dos conductors del cable bipolar. Si cada llum té una potència nominal
        \\(P_{llum} = 55\\,\\text{W}\\) quan s’alimenta directament amb una tensió \\(U = 12\\,\\text{V}\\), determineu:
         
            <br><br>
            <strong>a)</strong> La resistència equivalent \\(R_{eq}\\) dels dos llums connectats en paraŀlel. [0,5 punts]
            <br>
            <strong>b)</strong> La longitud màxima \\(L_{màx}\\) que pot tenir el cable si es vol que la caiguda de tensió del cable no sigui superior al 5 %. [1 punt]
            <br><br>
            Si s’utilitza un cable amb una longitud \\(L = 4\\,\\text{m}\\), determineu:
            <br><br>
            <strong>c)</strong> La resistència del cable \\(R_{cable}\\). [0,5 punts]
            <br><strong>d)</strong> La potència total \\(P_{total}\\) consumida conjuntament pel cable i els dos llums. [0,5 punts]
            <br><br>`,
        correctAnswer: "",  
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
        text: `<br>Una central elèctrica de cicle combinat produeix electricitat mitjançant dos cicles termodinàmics: un primer cicle de combustió de gas natural, de poder calorífic \\(p = 32,5\\,\\text{MJ/kg}\\), i un
segon cicle en què s’aprofita la calor residual del primer per a moure una turbina de vapor.
El gas natural es distribueix liquat, amb una densitat \\(ρ = 0,423\\,\\text{kg/L}\\). La potència elèctrica que
proporciona la central és \\(P_{elèctr} = 500\\,\\text{MW}\\) i el rendiment total és \\(η = 0,575\\). El rendiment del
cicle de gas és \\(η_g = 0,32\\). Determineu:
         
            <br><br>
            <strong>a)</strong> La potència consumida \\(P_{cons}\\) per la central. [0,5 punts]
            <br>
            <strong>b)</strong> El volum \\(V\\) de gas natural liquat que es crema a la central durant 24 hores de funcionament. [0,5 punts]
            <br>
            <strong>c)</strong> La potència dissipada en el cicle de gas \\(P_{diss,cg}\\). [0,5 punts]
            <br>
            <br><strong>d)</strong> El rendiment del cicle de vapor \\(η_v\\). [1 punt]
            <br><br>`,
        correctAnswer: "",  
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
        text: `<br>Els senyals lluminosos de limitació de velocitat en una via d’accés a una ciutat es controlen automàticament. Redueixen la velocitat màxima permesa quan la contaminació és alta o
quan la mesura de la velocitat mitjana dels vehicles en dos punts de mesurament determinats
és inferior al 80 % de la limitació indicada pel senyal lluminós. Responeu a les qüestions que
hi ha a continuació utilitzant les variables d’estat següents:

  <img src="variables.ex.png" alt="Imatge variables exercici">
  
            <br><br>
            <strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
            <br>
            <strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
            <br><br>
            Si s’utilitza un cable amb una longitud \\(L = 4\\,\\text{m}\\), determineu:
            <br><br>
            <strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
            <br><br>`,
        correctAnswer: "",  
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
        text: `<br>La suma de la resistència aerodinàmica i la resistència al rodolament constitueix la
demanda bàsica de potència d’un automòbil. La força resistent, expressada com una força
que s’oposa a l’avanç del vehicle, és donada per l’expressió \\(F_r = (230 + 0,13v^2)\\,\\text{N}\\), en què \\(v\\) és la
velocitat del vehicle en km/h. 
         
            <br><br>
            <strong>a)</strong> Determineu la força resistent quan el vehicle avança a una velocitat \\(v = 60\\,\\text{km/h}\\). [0,5 punts]
            <br>
            <strong>b)</strong> Dibuixeu, d’una manera aproximada i indicant les escales, la corba característica
potència-velocitat quan el vehicle circula a velocitats compreses entre \\(v = 0\\) i
\\(v = 120\\,\\text{km/h}\\). [1 punt]
            <br><br>
            El rendiment mecànic de la transmissió (de la sortida del motor a les rodes) és \\(η = 0,8\\).
Si quan el vehicle avança a una velocitat constant \\(v = 60\\,\\text{km/h}\\) el motor gira a \\(n = 2 500 min^{–1}\\):
            <br><br>
            <strong>c)</strong> Determineu el parell \\(Γ\\) que desenvolupa el motor. [1 punt]
            <br><br>`,
        correctAnswer: "",  
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
        text: `
       <img src="ex.cirquit_planxa.png" alt="Imatge cirquit"> 
        Una planxa de viatge pot funcionar connectada a la xarxa de tensió \\(U_1 = 120\\,\\text{V}\\) i a la xarxa
de tensió \\(U_2 = 230\\,\\text{V}\\). L’esquema elèctric de la planxa és el que es mostra en la figura. Quan
funciona a \\(230\\,\\text{V}\\), l’interruptor A està obert, i quan funciona a \\(120\\,\\text{V}\\), l’interruptor A està
tancat. La potència de la planxa és, en tots dos casos, \\(P = 1 000\\,\\text{W}\\). Determineu:
         
            <br><br>
            <strong>a)</strong> El valor de les resistències \\(R_1\\) i \\(R_2\\). [1 punt]
            <br>
            <strong>b)</strong>El valor de les intensitats \\(I_1\\) i \\(I_2\\) que circulen pel circuit en cada cas. [0,5 punts]
            <br><br>
           Si s’espatlla l’interruptor, de manera que quan està tancat equival a una resistència \\(R_A = 3\\,\\text{Ω}\\), determineu:
            <br><br>
            <strong>c)</strong> La potència \\(P_e\\) de la planxa quan s’alimenta amb \\(120\\,\\text{V}\\). [1 punt]
            <br><br>`,
        correctAnswer: "",  
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
        text: `
        <img src="ex.cartell.png" alt="Imatge cartell">
        <br>El cartell publicitari d’un bar de menús està format per dos taulers homogenis de fusta
de dimensions \\(h × b = 900 × 600\\,\\text{mm^2}\\) i un gruix \\(e = 11\\,\\text{mm}\\). Els dos taulers estan articulats
en el punt \\(C\\) i hi ha dos cables de secció \\(s = 1,8\\,\\text{mm^2}\\) que els uneixen pel punt mitjà dels seus
costats, tal com es mostra en la figura. Els cables mantenen una obertura \\(α = 40\\,\\text{°}\\) entre els
taulers. Quan el cartell recolza sobre el terra, la força \\(N\\) que rep en els punts \\(A\\) i \\(B\\) és vertical
i del mateix valor. Determineu:
         
            <br><br>
            <strong>a)</strong> La massa \\(m\\) de cada tauler, si \\(ρ_{fusta} = 530\\,\\text{kg/m^3}\\). [0,5 punts]
            <br>
            <strong>b)</strong> La força \\(N\\) que el cartell rep del terra en els punts \\(A\\) i \\(B\\). [0,5 punts]
            <br>
            <strong>c)</strong> La força \\(F\\) que fa cadascun dels cables [1 punt]
            <br><strong>d)</strong> La tensió normal \\(σ\\) dels cables causada per la força que fan. [0,5 punts]
            <br><br>`,
        correctAnswer: "",  
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
        text: `
        <br>Un avió comercial utilitza un combustible de poder calorífic \\(p_c = 42,42\\,\\text{MJ/kg}\\) i densitat
\\(ρ = 0,8075\\,\\text{kg/L}\\). L’avió té una capacitat de \\(N = 144\\) seients i disposa d’un dipòsit per al combustible de \\(V= 24 000\\,\\text{L}\\). Quan l’avió viatja a una velocitat \\(v = 850\\,\\text{km/h}\\) els motors consumeixen, entre tots dos, \\(c = 2 700\\,\\text{kg/h}\\) i proporcionen a l’avió una força d’empenyiment \\(F_E = 43\\,\\text{kN}\\)
(força en el sentit d’avanç de l’avió). Determineu, en aquestes condicions:
         
            <br><br>
            <strong>a)</strong> La distància màxima \\(d_{màx}\\), en km, que pot recórrer l’avió. [0,5 punts]
            <br>
            <strong>b)</strong> El consum mínim de combustible per passatger \\(c_p\\), en litres per cada \\(100\\,\\text{km}\\). [1 punt]
            <br>
            <strong>c)</strong> El rendiment \\(η\\) dels motors. [1 punt]
            <br><br>`,
        correctAnswer: "",  
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
        category: "control_logic",
        text: `<br>S’ha dissenyat un exoesquelet robòtic per a la rehabilitació de les extremitats superiors
de persones amb lesions neurològiques. Aquest aparell disposa d’un motor elèctric per a
assistir el moviment del colze afectat per la lesió. El motor s’activa quan l’aparell detecta la
intenció de l’usuari de fer un moviment, ja sigui perquè detecta activitat muscular mitjançant
un sensor d’electromiografia o bé perquè detecta que hi ha força d’interacció entre el braç
de la persona i l’exoesquelet gràcies a un sensor de força. A més, el motor només funciona si
l’usuari ha activat el funcionament de l’aparell mitjançant una aplicació mòbil. Responeu a
les qüestions que hi ha a continuació utilitzant les variables d’estat següents:            
        <br>
            <br><img src="Variable.ex.png" alt="Variables exoesquelet robòtic">
        <br>
            <br><br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
            <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.  [1 punt]
            <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
            <br><br>`, 
        correctAnswer: "",  
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
        text: `<br>S’ha dissenyat un puzle per a infants format per set peces. L’objectiu del joc és construir amb totes les peces
el quadrat de costat \\(b = 0,25\\,\\text{m}\\) que es mostra en la figura. Una empresa es planteja produir el puzle o comprar les peces ja elaborades directament a un proveïdor.
Si l’empresa produeix el puzle, el cost de producció es calcula amb l’expressió \\(c = c_1s + c_2p\\), en què \\(s\\) és la
superfície de fusta utilitzada i \\(p\\) és el perímetre de les peces tallades per a construir el puzle. En aquest cas, el
primer coeficient de cost és \\(c_1 = 13{,}5\\,\\text{€/m^2}\\)  i el segon és \\(c_2 = 0{,}85\\,\\text{€/m}\\). En canvi, si l’empresa compra les peces ja
elaborades directament a un proveïdor, el cost de cada peça és de \\(0{,}65\\,\\text{€}\\) si la peça fa menys de \\(100\\,\\text{cm^2}\\), i de \\(0{,}95\\,\\text{€}\\) si la peça fa més de \\(100\\,\\text{cm^2}\\). Determineu:

               <img src="ex.puzle.png" alt="imatge puzle">

            <br>
            <br><strong>a)</strong> La superfície de cadascuna de les set peces. Comproveu que la suma de la superfície de totes les peces equival a la superfície \\(s\\) del quadrat de la figura. [1 punt]
            <br>
            <br><strong>b)</strong> El perímetre p de les peces tallades per a construir el puzle. [1 punt]
            <br><strong>c)</strong> El cost de producció del puzle, d’una banda, i el cost de comprar les peces ja elaborades a un proveïdor, de l’altra. Quina és l’opció més econòmica per a l’empresa? [0,5 punts]
            <br><br>`, 
        correctAnswer: "", 
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
        text: `<br>Una plataforma elevadora puja amb una velocitat constant una càrrega fins a una altura
\\(Δh = 4{,}5\\,\\text{m}\\) en un temps \\(t = 50\\,\\text{s}\\). La plataforma s’acciona amb un motor elèctric de corrent
continu en sèrie amb un reductor d’engranatges. Segons el catàleg del fabricant, el rendiment
del reductor d’engranatges és \\(η_{red} = 0,72\\). El motor s’alimenta amb una tensió \\(U = 220\\,\\text{V}\\), consumeix un corrent \\(I = 17,5\\,\\text{A}\\) i gira a una velocitat \\(n = 1 500\\,\\text{min^{–1}}\\). El parell a l’eix de sortida
del motor és \\(Γ_m = 19{,}5\\,\\text{N m}\\). Si les resistències passives a la plataforma elevadora es consideren negligibles, determineu: 
            <br><br>
            <strong>a)</strong> La potència elèctrica \\(P_{elèctr}\\) que consumeix el motor i el rendiment electromecànic \\(η_{mot}\\) d’aquest motor. [1 punt]
            <br>
            <strong>b)</strong> La potència total dissipada \\(P_{diss}\\) pel conjunt motor-reductor. [0,5 punts]
            <br>
            <strong>c)</strong> La potència mecànica \\(P_{càrrega}\\) requerida per a elevar la càrrega i la massa \\(m\\) d’aquesta càrrega. [0,5 punts]
            <br>
            <br><strong>d)</strong> El corrent \\(I′\\) que consumiria el motor si la massa de la càrrega fos la meitat, \\(m′ = m/2\\),
i es mantingués la velocitat (considereu que els rendiments i la tensió d’alimentació del motor es mantenen constants). [0,5 punts]
            <br><br>`,
        correctAnswer: "",  
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
        text: `
        <br>La placa quadrada d’acer de la figura, de costat \\(L = 1 000\\,\\text{mm}\\) i gruix \\(e = 100\\,\\text{mm}\\), està articulada a la
paret en el punt \\(O\\). Per a controlar la inclinació \\(φ\\) de la placa, s’utilitza un cilindre hidràulic de doble efecte.
Un dels extrems del cilindre està articulat a la paret en el punt \\(A\\), i l’altre extrem està articulat a la placa en el
punt \\(B\\). El diàmetre interior del cilindre és \\(d_{int} = 70\\,\\text{mm}\\) i el diàmetre de la tija és \\(d_{tija} = 40\\,\\text{mm}\\). La densitat de l’acer
és \\(ρ_{acer} = 7 850\\,\\text{kg/m^3}\\). 

<img src="ex.placa.png" alt="Imatge placa d'acer">
         
            <br><br>
            <strong>a)</strong> Dibuixeu el diagrama de cos lliure de la placa per a \\(φ = 0\\,\\text{°}\\). [0,5 punts]
            <br>
            Determineu:
            <br>
            <strong>b)</strong> La massa \\(m\\) de la placa. [0,5 punts]
            <br>
            <strong>c)</strong> La força \\(F_c\\) que fa el cilindre hidràulic si la placa està en repòs amb una inclinació \\(φ = 0\\,\\text{°}\\). [0,5 punts]
            <br><strong>d)</strong> La tensió normal a tracció σ de la tija del cilindre en la situació anterior. Quina és la pressió relativa \\(p_{int}\\) a l’interior del cilindre? [1 punt]
            <br><br>`,
        correctAnswer: "",  
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
        text: `<br>Per a reduir l’emissió de partícules de \\(CO^2\\)
 d’un vehicle que funciona amb gasolina, és possible instaŀlar-hi un sistema que fa que el motor pugui funcionar també amb gas liquat del petroli (GLP). La instaŀlació d’aquest sistema té un cost de \\(2 000\\,\\text{€}\\) addicionals, que caldria sumar al
cost del vehicle, i inclou la coŀlocació d’un dipòsit de GLP de \\(V = 40\\,\\text{L}\\) al maleter. Quan el vehicle
circula a una velocitat \\(v = 120\\,\\text{km/h}\\), consumeix una mitjana de \\(8 L/100\\,\\text{km}\\) si funciona amb
gasolina, o de \\(9{,}3 L/100\\,\\text{km}\\) si funciona amb GLP. La gasolina té una densitat \\(ρ_{gasol} = 0,75\\,\\text{kg/L}\\)
i un poder calorífic \\(p_{c,gasol} = 42{,}5\\,\\text{MJ/kg}\\), i el GLP té una densitat \\(ρ_{GLP} = 0{,}56\\,\\text{kg/L}\\) i un poder
calorífic \\(p_{c,GLP} = 46\\,\\text{MJ/kg}\\). El preu de cada combustible és el següent: \\(1{,}36\\,\\text{€/L}\\) en el cas de la
gasolina i \\(0{,}73\\,\\text{€/L}\\) en el cas del GLP. Si el vehicle circula a una velocitat \\(v = 120\\,\\text{km/h}\\), determineu:        
            <br><br>
            <strong>a)</strong> La potència tèrmica mitjana \\(P_{gasol}\\) i \\(P_{GLP}\\) consumida amb cada combustible. [1 punt]
            <br>
            <strong>b)</strong> El cost \\(c_{gasol}\\) i \\(c_{GLP}\\), en euros per cada 100 km, d’utilitzar cadascun dels combustibles. [0,5 punts]
            <br>
            <strong>c)</strong> La distància mitjana anual \\(d_{any}\\), en km per any, que ha de recórrer el vehicle si es vol amortitzar la instaŀlació del sistema GLP en \\(t = 3 anys\\). [0,5 punts]
            <br>
            <br><strong>d)</strong> La distància estimada \\(d_{est}\\) que pot recórrer el vehicle amb GLP si el dipòsit instaŀlat es troba ple fins al 85 % de la seva capacitat.  [0,5 punts]
            <br><br>`,
        correctAnswer: "",  
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
        text: `Una companyia aèria té programats quatre vols diaris entre dues ciutats: dos al matí,
un a la tarda i un altre a la nit. Els vols del matí registren una ocupació mitjana del 84,3 %,
el vol de la tarda del 77,3 % i el de la nit del 82,3 %. Si la capacitat de l’avió que s’utilitza en
aquests vols és de 200 persones, quants passatgers s’han transportat en un any i quina ha
estat l’ocupació mitjana global?`,
        options: [
            { text: "292 000 passatgers, amb una ocupació mitjana del 82,05 %", value: "a" },
            { text: "239 586 passatgers, amb una ocupació mitjana del 82,05 %", value: "b" },
            { text: "239 586 passatgers, amb una ocupació mitjana del 81,3 %", value: "c" },
            { text: "292 000 passatgers, amb una ocupació mitjana del 81,3 %", value: "d" }
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
   `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatics_hydraulics",
        text: `Una barra cilíndrica té un diàmetre de \\(3\\,\\text{mm}\\), una tensió de ruptura \\(σr = 800\\,\\text{MPa}\\) i un
límit elàstic \\(σe = 640\\,\\text{MPa}\\). Quina és la força de tracció màxima a la qual es pot sotmetre la
barra sense que es trenqui?`,
        options: [
            { text: "800 N", value: "a" },
            { text: "22 619 N", value: "b" },
            { text: "5 655 N", value: "c" },
            { text: "4 524 N", value: "d" }
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
`
    },
    {
        type: "questions", // Tipus de pregunta
        category: "motors_reductors",
        text: `Una resistència de \\(5\\,\\text{Ω}\\) està feta amb fil de constantà de \\(4{,}508\\,\\text{m}\\) de longitud i una resistivitat de \\(0{,}49\\,\\text{μΩ m}\\). Quin és el diàmetre del fil utilitzat?`,
        options: [
            { text: "0,75 mm", value: "a" },
            { text: "0,375 mm", value: "b" },
            { text: "0,4418 mm", value: "c" },
            { text: "0,8319 mm", value: "d" }
        ],
        correctAnswer: "a",
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
 `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatics_hydraulics",
        text: `Un aerogenerador està format per un rotor amb tres pales, un multiplicador d’engranatges i un generador elèctric. En unes condicions determinades, la potència elèctrica generada
és \\(P_{elèctr} = 1,2\\,\\text{MW}\\). Si el rendiment del multiplicador és \\(η_{mult} = 0,70\\) i la potència mecànica a
l’eix d’entrada del multiplicador és \\(P_{entrada} = 1,966\\,\\text{MW}\\), quin és el rendiment \\(η_{gen}\\) del generador i la potència \\(P_{diss}\\) que s’hi dissipa?`,
        options: [
            { text: "\\(η_{gen}\\) = 0,8550 i \\(P_{diss}\\) = 203,5 kW", value: "a" },
            { text: "\\(η_{gen}\\) = 0,8720 i \\(P_{diss}\\) = 766 kW", value: "b" },
            { text: "\\(η_{gen}\\) = 0,8720 i \\(P_{diss}\\) = 176,2 kW", value: "c" },
            { text: "\\(η_{gen}\\) = 0,6104 i \\(P_{diss}\\) = 766 kW", value: "d" }
        ],
        correctAnswer: "c",
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
`
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials_i_assaigs",
        text: `La velocitat de sincronisme d’un motor asíncron que està connectat a la xarxa de tensió
\\(U = 230\\,\\text{V}\\) i freqüència \\(f = 50\\,\\text{Hz}\\) és de \\(1 000\\,\\text{min^{–1}}\\). A quina freqüència està connectat aquest
motor si passa a tenir una velocitat de sincronisme de \\(1 200\\,\\text{min^{–1}}\\)?`,
        options: [
            { text: "120 Hz", value: "a" },
            { text: "No ho podem saber, perquè depèn de la tensió de la xarxa", value: "b" },
            { text: "75 Hz", value: "c" },
            { text: "60 Hz", value: "d" }
        ],
        correctAnswer: "d",
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
         `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Un motor asíncron de corrent altern de dos parells de pols està connectat a la xarxa de
tensió \\(U = 230\\,\\text{V}\\) i freqüència \\(f = 50\\,\\text{Hz}\\). Quin és el lliscament relatiu \\(s\\) del motor en tant per
cent (%) si gira a \\(n = 1 400\\,\\text{min^{–1}\\)?`,
        options: [
            { text: "6,667 %", value: "a" },
            { text: "7,143 %", value: "b" },
            { text: "5 %", value: "c" },
            { text: "53,33 %", value: "d" }
        ],
        correctAnswer: "a",
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
   `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatics_hydraulics",
        text: `El magal és un aliatge resistent i lleuger que s’utilitza per a l’elaboració d’instruments
quirúrgics. Conté un 8 % d’alumini (Al), un 1 % de zinc (Zn), un 0,2 % de manganès (Mn)
i la resta és magnesi (Mg). En l’obtenció d’aquest aliatge, quina quantitat de zinc cal per a
aliar-lo amb 350 kg de magnesi?`,
        options: [
            { text: "3,5 kg", value: "a" },
            { text: "3,855 kg", value: "b" },
            { text: "30,84 kg", value: "c" },
            { text: "35 kg", value: "d" }
        ],
        correctAnswer: "b",
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
`
    },
    {
        type: "questions", // Tipus de pregunta
        category: "motors_reductors",
        text: `La cilindrada d’un motor de combustió és de \\(1 998\\,\\text{cm^3}\\). Tant el diàmetre com la cursa
dels cilindres del motor són de \\(86\\,\\text{mm}\\). Quants cilindres té el motor?`,
        options: [
            { text: "4", value: "a" },
            { text: "5", value: "b" },
            { text: "6", value: "c" },
            { text: "8", value: "d" }
        ],
        correctAnswer: "a",
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
 `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatics_hydraulics",
        text: `Un sensor de pressió atmosfèrica té una precisió de ±0,3 hPa i una estabilitat en la mesura
al llarg del temps de \\(±0,1\\,\\text{hPa/any}\\). La mesura de la pressió atmosfèrica l’1 de març de 2017
va ser de \\(990\\,\\text{hPa}\\) i la del mateix dia de l’any 2018, de \\(1 030\\,\\text{hPa}\\). La diferència entre la pressió
atmosfèrica real dels dos dies està compresa entre`,
        options: [
            { text: "40 hPa i 40,3 hPa", value: "a" },
            { text: "39,4 hPa i 40,6 hPa", value: "b" },
            { text: "39,7 hPa i 40,3 hPa", value: "c" },
            { text: "39,3 hPa i 40,7 hPa", value: "d" }
        ],
        correctAnswer: "d",
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
`
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials_i_assaigs",
        text: `La fabricació d’una peça metàŀlica es duu a terme en dos processos. En primer lloc, la
peça es mecanitza en un torn i, posteriorment, se’n milloren les propietats mecàniques mitjançant un tractament tèrmic. Després de cada procés, es controla la qualitat de les peces i
es desestimen les que no són correctes. Si s’acaba produint correctament el 93,12 % de les
peces inicials i la taxa de rebuig del tornejat és del 3 %, quina és la taxa de rebuig del procés
de tractament tèrmic?`,
        options: [
            { text: "3,5 %", value: "a" },
            { text: "3,88 %", value: "b" },
            { text: "4 %", value: "c" },
            { text: "4,82 %", value: "d" }
        ],
        correctAnswer: "c",
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
         `
    }
];
