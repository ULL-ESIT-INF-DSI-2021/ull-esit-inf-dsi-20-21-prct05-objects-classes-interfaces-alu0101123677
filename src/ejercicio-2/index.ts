import {Article} from './class_article'
import {Gestor} from './class_gestor'

/**
 * Función main que inicializa los objetos de la clases Article y Gestors
 * @param filtro tipo string con la palabra o palabras que actuan como filtro
 * @returns retorna un string para comprobar que la ejecución ha sido correcta
 */
function main2(filtro: string): string {
let article1 =
  new Article("A modifie descent method-based heuristic for binary quadratic knapsack problems with conflict graphs"
    ,["Isma Dahmani", "Mhand Hifi"], ["isma_dahmani@gmail.com", "mhand_hifi@gmail.com"], ["knapsack", "heuristic", "optimization", "descent"], 
    "The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others. In this paper, we propose a descent method-based heuristic for tackling a special knapsack problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) an intensification search with a descent method for enhancing the accuracy of the solutions and (ii) a diversification strategy which is used for enlarging the search space. The method uses degrading and re-optimization strategies in order to reach a series of diversified solutions. The performance of the proposed method is evaluated on benchmark instances taken from the literature, where its achieved results are compared to those reached by both GLPK solver and the best method available in the literature. The method seems very competitive, where it is able to achieve 37 new lower bounds.",
     new Date("2019-07-17"), "Annals of Operations Research", 2);

let article2 =
  new Article("On exact solution approaches for bilevel quadratic 0–1 knapsack problem", 
    ["Gabriel Lopez Zenarosa", "Oleg A. Prokopyev", "Eduardo L. Pasiliao"], ["grabriel_lopez@gmail.com", "olega_prokopyev@gmail.com", "eduado_pasiliao@gmail.com"],
    ["bilevel programming","bilevel knapsack problem","quadratic knapsack problem","dynamic programming"], 
    "We consider the bilevel quadratic knapsack problem (BQKP) that model settings where a leader appropriates a budget for a follower, who solves a quadratic 0–1 knapsack problem. BQKP generalizes the bilevel knapsack problem introduced by Dempe and Richter (Cent Eur J Oper Res 8(2):93–107, 2000), where the follower solves a linear 0–1 knapsack problem. We present an exact-solution approach for BQKP based on extensions of dynamic programs for QKP bounds and the branch-and-backtrack algorithm. We compare our approach against a two-phase method computed using an optimization solver in both phases: it first computes the follower’s value function for all feasible leader’s decisions, and then solves a single-level, value-function reformulation of BQKP as a mixed-integer quadratically constrained program. Our computational experiments show that our approach for solving BQKP outperforms the two-phase method computed by a commercial state-of-the-art optimization software package.",
    new Date("2018-08-04"), "Annals of Operations Research", 1);

let article3 =
  new Article("New binary marine predators optimization algorithms for 0–1 knapsack problems",
    ["Mohamed Abdel-Basset","Reda Mohamed","Ripon K. Chakrabortty","Michael Ryan", "Seyedali Mirjalili"],
    ["mohamed@gmail.com", "reda_mohamed@gmail.com", "ripon@gmail.com", "michael@gmail.com", "seyedali@gmail.com"],
    ["marine predator algorithm", "algorithm","Knapsack","Artificial Intelligence","Binary Optimization","Benchmark","Combinatorial Optimization"],
    "Recently, a novel meta-heuristic algorithm known as the marine predators algorithm (MPA) has been proposed for solving continuous optimization problems. Despite the significant superiority of MPA in solving continuous problems, the algorithm is not applicable to binary problems. This work proposes a binary version of MPA for solving the 0–1 knapsack (KP01) problem. To develop the binary variant of MPA (BMPA), a wide range of V-Shaped and S-shaped transfer functions is investigated for mapping continuous values to binary. The performance of a binary algorithm is first shown to heavily rely on the selection of an appropriate transfer function on a specific dataset. The performance of the proposed BMPA algorithm is then tested on a set of KP01 problems and compared to a number of existing algorithms. The results demonstate the merits of the BMPAs proposed in this work.",
    new Date("2021-01-01"), "Computers & Industrial Engineering", 1);

let article4 =
  new Article("Land Usage Identification with Fusion of Thepade SBTC and Sauvola Thresholding Features of Aerial Images Using Ensemble of Machine Learning Algorithms",
    ["Sudeep D. Thepade", "Piyush R. Chaudhari"],
    ["suddep@gmail.com", "pyush@gmail.com"],
    ["thresholding features", "machine learning algorithms", "aerial images"],
    "Detecting the appropriate usage of a piece of land is known as Land Usage Mining. The key resource to detect the Land Usages is aerial Images. The advancement in technology in form of satellites, drones, unmanned aerial vehicles do capture the tons of wide land cover images. Aerial images are used for various purposes alias getting an overview to put up the settlement by making construction, extracting mineral deposits, disaster mitigation planning, disaster recovery, and surveillance. Automated land usage identification with help of modern machine learning algorithms may be a great boon to mankind. Different feature extraction methods are being explored to represent aerial image content in the signature form, these features are mainly taken as a global or local content description of the image. Feature Level Fusion of both the global and the local content description features may give a more accurate capability for identification of land usage. The paper proposes feature level fusion of global features extracted using Thepade’s Sorted Block Truncation Coding (Thepade SBTC) and local features extracted using Sauvola Thresholding for land usage identification. Consideration of more than one Machine Learning classifiers as an ensemble has proven better than individual Machine Learning classifiers. Thepade SBTC is explored in aerial image feature extraction with nine variations as TSBTC 2-ary, TSBTC 3-ary, TSBTC 4-ary, TSBTC 5-ary, TSBTC 6-ary, TSBTC 7-ary, TSBTC 8-ary, TSBTC 9-ary, and TSBTC 10-ary. The experimentation is done on UC Land Merced Dataset having 2100 images spread across 21 land usage types. Here the land usage identification accuracy, Matthews Correlation Coefficient (MCC), and F Measure have shown better performance in TSBTC 10-ary global feature extraction method. Further, the TSBTC 10-ary global features are concatenated with Sauvola thresholding-based local features for feature level fusion, which show the performance improvement of the proposed land usage identification technique. Also, the ensembles of machine learning algorithms are deployed for performance assessment along with the individual nine machine learning algorithms for the proposed land usage identification technique. The majority voting-based ensemble of ‘IB1+ Random Forest+ Simple Logistic+ SMO+ KStar’ has resulted in better accuracy of land usage identification.",
    new Date("2020-11-05"), "Applied Artificial Intelligence", 0);

let bibliografia = [article1, article2, article3, article4];

let gestor =
  new Gestor(bibliografia);

gestor.table();

return gestor.filter(filtro);

}

console.log(main2("Sudeep"));
