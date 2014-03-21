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
        title: 'S5y5 Diff/NoDiff vs Cort/Control vs 2D/3D (1k by 1k)',
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

    return {
//        PC3_1k: PC3_1k
        Sy5y_1k : Sy5y_1k,
        PC3_5k : PC3_5k
    };
})();