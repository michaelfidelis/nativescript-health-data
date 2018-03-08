import { Common, QueryRequest } from './health-data.common';
export declare class HealthData extends Common {
    healthStore: HKHealthStore;
    constructor();
    private resolveDataType(constToRead);
    isAvailable(): Promise<boolean>;
    requestAuthorization(constToRead: string | string[]): Promise<boolean>;
    query(opts: QueryRequest): Promise<any>;
    isAuthorized(constToRead: string): Promise<boolean>;
    private convertDatetoNSDate(date);
    private queryForQuantityOrCategoryData(dataType, start, end, aggregateBy, unitString, callback);
    private aggregateData(parsedData, aggregateBy, result);
    private queryForCharacteristicData(dataType);
}
export declare const quantityTypes: {
    activeEnergyBurned: string;
    appleExerciseTime: string;
    basalBodyTemperature: string;
    basalEnergyBurned: string;
    bloodAlcoholContent: string;
    bloodGlucose: string;
    bloodPressureDiastolic: string;
    bloodPressureSystolic: string;
    bodyFatPercentage: string;
    bodyMass: string;
    bodyMassIndex: string;
    bodyTemperature: string;
    dietaryBiotin: string;
    dietaryCaffeine: string;
    dietaryCalcium: string;
    dietaryCarbohydrates: string;
    dietaryChloride: string;
    dietaryCholesterol: string;
    dietaryChromium: string;
    dietaryCopper: string;
    dietaryEnergyConsumed: string;
    dietaryFatMonounsaturated: string;
    dietaryFatPolyunsaturated: string;
    dietaryFatSaturated: string;
    dietaryFatTotal: string;
    dietaryFiber: string;
    dietaryFolate: string;
    dietaryIodine: string;
    dietaryIron: string;
    dietaryMagnesium: string;
    dietaryManganese: string;
    dietaryaMolybdenum: string;
    dietaryNiacin: string;
    dietaryPantothenicAcid: string;
    dietaryPhosphorus: string;
    dietaryPotassium: string;
    dietaryProtein: string;
    dietaryRiboflavin: string;
    dietarySelenium: string;
    dietarySodium: string;
    dietarySugar: string;
    dietaryThiamin: string;
    dietaryViataminA: string;
    dietaryVitaminB12: string;
    dietaryVitaminB6: string;
    dietaryVitaminC: string;
    dietaryVitaminD: string;
    dietaryVitaminE: string;
    dietaryVitaminK: string;
    dietaryWater: string;
    dietaryZinc: string;
    distanceCycling: string;
    distanceSwimming: string;
    distanceWalkingRunning: string;
    distanceWheelChair: string;
    electrodermalActivity: string;
    flightsClimbed: string;
    forcedExpiratoryVolume1: string;
    forcedVitalCapacity: string;
    heartRate: string;
    height: string;
    inhalerUsage: string;
    leanBodyMass: string;
    nikeFuel: string;
    numberOfTimesFallen: string;
    oxygenSaturation: string;
    peakExpiratoryFlowRate: string;
    peripheralPerfusionIndex: string;
    pushCount: string;
    respiratoryRate: string;
    stepCount: string;
    swimmingStrokeCount: string;
    uvExposure: string;
};
export declare const characteristicTypes: {
    biologicalSex: string;
    bloodType: string;
    dateOfBirthComponents: string;
    fitzpatrickSkinType: string;
    wheelchairUse: string;
};
export declare const categoryTypes: {
    appleStandHour: string;
    cervicalMucusQuality: string;
    intermenstrualBleeding: string;
    menstrualFlow: string;
    mindfulSession: string;
    ovulationTestResult: string;
    sexualActivity: string;
};
export declare const acceptableDataTypes: {
    steps: string;
    distance: string;
    calories: string;
    height: string;
    weight: string;
    heartRate: string;
    fatPercentage: string;
};
