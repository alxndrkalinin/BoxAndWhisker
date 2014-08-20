/**
 * Created by Alexandr Kalinin on 3/20/14.
 */

var dataConfig = (function () {

    var PC3_1k = {
        title: 'PC3 EPI vs EMT (1k by 1k)',
        files: [
            'PC3_EPI_5k.csv',
            'PC3_EMT_5k.csv'
        ]
    };

    var Sy5y_1k = {
        title: 'S5y5 Diff/UnDiff vs Cort/Control vs 2D/3D (1k by 1k)',
        files: [
            'Sy5y_NoDiff_Control_2D_N32.csv',
            'Sy5y_NoDiff_Cort_2D_N33.csv',
            'Sy5y_NoDiff_Control_3D_N34.csv',
            'Sy5y_NoDiff_Cort_3D_N35.csv',
            'Sy5y_Diff_Control_2D_N36.csv',
            'Sy5y_Diff_Cort_2D_N37.csv',
            'Sy5y_Diff_Control_3D_N38.csv',
            'Sy5y_Diff_Cort_3D_N39.csv'
        ]
    };

    var PC3_5k = {
        title: 'PC3 EPI vs EMT (5k by 5k)',
        files: [
            'PC3_EPI_5k.csv',
            'PC3_EMT_5k.csv'
        ]
    };

    var Fibroblast_7k = {
        title: 'Fibroblast 7k by 7k',
        files: [
            'Fibroblast_7k_N52.csv'
        ]
    };

    var PC3_7k = {
        title: 'PC3 EPI vs EMT (7k by 7k)',
        files: [
            'PC3_EPI_7k_567_cases.csv',
            'PC3_EMT_7k_90_cases.csv'
        ]
    };

    var S5y5_5k = {
        title: 'Sy5y UnDiff: Cort/Control vs 2D/3D (5k by 5k)',
        files: [
            'Sy5y_NoDiff_Control_2D_5k_88_cases.csv',
            'Sy5y_NoDiff_Control_3D_5k_39_cases.csv',
            'Sy5y_NoDiff_Cort_2D_5k_90_cases.csv',
            'Sy5y_NoDiff_Cort_3D_5k_59_cases.csv'
        ]
    };

    var PC3_combined = {
        title: 'PC3 EPI vs EMT (combined dataset)',
        files: [
            'EPI_861_cases.csv',
            'EMT_862_cases.csv'
        ]
    };

    var PC3_blinded_72_vs_73 = {
        title: 'PC3 blinded: runs 72 vs 73 ',
        files: [
            '05_31_14_6x6_B11R_N72.csv',
            '05_31_14_6x6_BR7_N73.csv'
        ]
    };

    var PC3_blinded_77_vs_81 = {
        title: 'PC3 blinded: runs 77 vs 81 ',
        files: [
            '06_05_B11R_10x10_63x_2timesZoom_N77.csv',
            '06_07_14_10x10_BR7_2xzoom_N81.csv'
        ]
    };

    return {
//        PC3_1k: PC3_1k
        Sy5y_1k : Sy5y_1k,
        PC3_5k : PC3_5k,
        Fibroblast_7k: Fibroblast_7k,
        PC3_7k: PC3_7k,
        S5y5_5k: S5y5_5k,
        PC3_combined: PC3_combined,
        PC3_blinded_72_vs_73: PC3_blinded_72_vs_73,
        PC3_blinded_77_vs_81: PC3_blinded_77_vs_81
    };
})();