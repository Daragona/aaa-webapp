/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ZKTreeInterface extends utils.Interface {
  functions: {
    "FIELD_SIZE()": FunctionFragment;
    "ROOT_HISTORY_SIZE()": FunctionFragment;
    "ZERO_VALUE()": FunctionFragment;
    "commitments(bytes32)": FunctionFragment;
    "currentRootIndex()": FunctionFragment;
    "filledSubtrees(uint256)": FunctionFragment;
    "getLastRoot()": FunctionFragment;
    "hashLeftRight(uint256,uint256)": FunctionFragment;
    "hasher()": FunctionFragment;
    "isKnownRoot(bytes32)": FunctionFragment;
    "levels()": FunctionFragment;
    "nextIndex()": FunctionFragment;
    "nullifiers(bytes32)": FunctionFragment;
    "roots(uint256)": FunctionFragment;
    "verifier()": FunctionFragment;
    "zeros(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FIELD_SIZE"
      | "ROOT_HISTORY_SIZE"
      | "ZERO_VALUE"
      | "commitments"
      | "currentRootIndex"
      | "filledSubtrees"
      | "getLastRoot"
      | "hashLeftRight"
      | "hasher"
      | "isKnownRoot"
      | "levels"
      | "nextIndex"
      | "nullifiers"
      | "roots"
      | "verifier"
      | "zeros"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nullifiers",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "roots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "zeros",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nullifiers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;

  events: {
    "Commit(bytes32,uint32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Commit"): EventFragment;
}

export interface CommitEventObject {
  commitment: string;
  leafIndex: number;
  timestamp: BigNumber;
}
export type CommitEvent = TypedEvent<
  [string, number, BigNumber],
  CommitEventObject
>;

export type CommitEventFilter = TypedEventFilter<CommitEvent>;

export interface ZKTree extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZKTreeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<[number]>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    currentRootIndex(overrides?: CallOverrides): Promise<[number]>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLastRoot(overrides?: CallOverrides): Promise<[string]>;

    hashLeftRight(
      _left: PromiseOrValue<BigNumberish>,
      _right: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasher(overrides?: CallOverrides): Promise<[string]>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    levels(overrides?: CallOverrides): Promise<[number]>;

    nextIndex(overrides?: CallOverrides): Promise<[number]>;

    nullifiers(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verifier(overrides?: CallOverrides): Promise<[string]>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  commitments(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  currentRootIndex(overrides?: CallOverrides): Promise<number>;

  filledSubtrees(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getLastRoot(overrides?: CallOverrides): Promise<string>;

  hashLeftRight(
    _left: PromiseOrValue<BigNumberish>,
    _right: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  hasher(overrides?: CallOverrides): Promise<string>;

  isKnownRoot(
    _root: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  levels(overrides?: CallOverrides): Promise<number>;

  nextIndex(overrides?: CallOverrides): Promise<number>;

  nullifiers(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  roots(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  verifier(overrides?: CallOverrides): Promise<string>;

  zeros(
    i: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    currentRootIndex(overrides?: CallOverrides): Promise<number>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getLastRoot(overrides?: CallOverrides): Promise<string>;

    hashLeftRight(
      _left: PromiseOrValue<BigNumberish>,
      _right: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    hasher(overrides?: CallOverrides): Promise<string>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    levels(overrides?: CallOverrides): Promise<number>;

    nextIndex(overrides?: CallOverrides): Promise<number>;

    nullifiers(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    verifier(overrides?: CallOverrides): Promise<string>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Commit(bytes32,uint32,uint256)"(
      commitment?: PromiseOrValue<BytesLike> | null,
      leafIndex?: null,
      timestamp?: null
    ): CommitEventFilter;
    Commit(
      commitment?: PromiseOrValue<BytesLike> | null,
      leafIndex?: null,
      timestamp?: null
    ): CommitEventFilter;
  };

  estimateGas: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<BigNumber>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastRoot(overrides?: CallOverrides): Promise<BigNumber>;

    hashLeftRight(
      _left: PromiseOrValue<BigNumberish>,
      _right: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasher(overrides?: CallOverrides): Promise<BigNumber>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<BigNumber>;

    nullifiers(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRootIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashLeftRight(
      _left: PromiseOrValue<BigNumberish>,
      _right: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nullifiers(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zeros(
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
